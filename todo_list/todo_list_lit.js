import {
  LitElement,
  css,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class TodoListLit extends LitElement {
  static styles = css`
    .todo-container {
      font-family: Arial, sans-serif;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      max-width: 300px;
    }
    .todo-input {
      width: 90%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .todo-input:focus {
      border: 1px solid #b8ddff;
    }
    .todo-button {
      padding: 10px;
      background-color: #ccffcc;
      color: black;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      border: 1px solid black;
    }
    .todo-button:hover {
      background-color: #b3ffb3;
    }
    .todo-list {
      padding-left: 5%;
      list-style-type: circle;
    }
    .todo-item {
      max-width: 90%;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .todo-item button {
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      white-space: nowrap;
    }
    .todo-item button:hover {
      background-color: #c82333;
    }
  `;

  static properties = {
    tasks: { type: Array },
    title: { type: String },
    placeholder: { type: String },
  };

  constructor() {
    super();
    this.tasks = [];
    this.title;
  }

  render() {
    return html`
      <div class="todo-container">
        <h3>${this.title}</h3>
        <ul class="todo-list">
          ${this.tasks.map(
            (task, index) => html`
              <li class="todo-item">
                ${task}
                <button
                  @click="${() => this.removeTask(index)}"
                  class="remove-button"
                >
                  &minus; Remove
                </button>
              </li>
            `
          )}
        </ul>
        <input type="text" class="todo-input" placeholder=${this.placeholder} />
        <button class="todo-button" @click="${this.addTask}">&plus; Add</button>
      </div>
    `;
  }

  addTask() {
    const input = this.renderRoot.querySelector(".todo-input");
    const taskText = input.value.trim();
    if (taskText) {
      this.tasks = [...this.tasks, taskText];
      input.value = "";
    }
  }

  removeTask(index) {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }
}

customElements.define("todo-list-lit", TodoListLit);
