class TodoList extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
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

    shadow.appendChild(style);

    const title = this.getAttribute("title") || "ToDo";
    const placeholder = this.getAttribute("placeholder") || "Add a new task";
    const tasks = JSON.parse(this.getAttribute("tasks")) || [];

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="todo-container">
        <h3>${title}</h3>
        <ul class="todo-list">
          ${tasks
            .map(
              (task) => `
            <li class="todo-item">
              ${task}
              <button class="remove-button">
              &minus; Remove</button>
            </li>
          `
            )
            .join("")}
        </ul>
        <input type="text" class="todo-input" placeholder="${placeholder}">
        <button class="todo-button">&plus; Add</button>
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

    this.input = shadow.querySelector(".todo-input");
    this.button = shadow.querySelector(".todo-button");
    this.list = shadow.querySelector(".todo-list");

    this.button.addEventListener("click", this.addTask);

    shadow.querySelectorAll(".remove-button").forEach((button) => {
      button.addEventListener("click", () => {
        this.removeTask(button.closest(".todo-item"));
      });
    });
  }

  addTask() {
    const taskText = this.input.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
      ${taskText}
      <button class="remove-button">
      &minus; Remove</button>
    `;

    listItem.querySelector(".remove-button").addEventListener("click", () => {
      this.removeTask(listItem);
    });

    this.list.appendChild(listItem);
    this.input.value = "";
  }

  removeTask(listItem) {
    this.list.removeChild(listItem);
  }
}

customElements.define("todo-list", TodoList);
