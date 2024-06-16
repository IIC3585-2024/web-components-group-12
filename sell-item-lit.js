import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class SellItemLit extends LitElement {
  static properties = {
    imageUrl: {},
    rating: {},
    title: {},
    price: {},
    discount: {}
  };

  getDiscountedValue() {
    return this.price - (this.price * this.discount / 100);
  }

  static styles = css`
      .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 3px;
        position: relative;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      }

      .description {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 0;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.75);
        transition: height 0.5s;
        justify-content: center;
      }

      img {
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      .container:hover .description {
        height: 100%;
      }

      .rating {
        display: flex;
        flex-direction: column;
        padding: 0 0 5% 5%;
      }

      .title {
        display: flex;
        justify-content: center;
        padding: 2%;
        background-color: rgba(96, 96, 96, 0.75);
      }

      .stars span {
        display: inline-block;
        color: orange;
      }

      .price-info {
        display: flex;
        padding: 0 5%;
        justify-content: space-between;
      }

      .prices {
        display: flex;
        flex-direction: column;
      }

      .price-info > p {
        color: red;
        font-weight: bold;
      }

      .price {
        text-decoration: line-through;
      }
    `;

  constructor() {
    super();
    this.title = '';
    this.price = 0;
    this.discount = 0;
    this.rating = 0;
    this.imageUrl = '';
  }

  render() {
    return html`
      <div class="container">
        <img src="${this.imageUrl}" alt="${this.title}">
        <div class="description">
          <div class="rating">
            <p>Calificación: ${this.rating}</p>
            <div class="stars">
              ${Array.from({length: this.rating}, (_, i) => html`<span>★</span>`)}
            </div>
          </div>
          <div class="title">
            <h1>${this.title}</h1>
          </div>
          <div class="price-info">
            <div class="prices">
              <p class="discounted-price">$${this.getDiscountedValue()}</p>
              <p class="price">Normal: $${this.price}</p>
              </div>
            <p class="discount">Descuento: ${this.discount}%</p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('sell-item-lit', SellItemLit);