class SellItem extends HTMLElement {
  static observedAttributes = [
    'title',
    'price',
    'discounted-price',
    'discount',
    'rating',
    'image-url'
  ];
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');

    const image = document.createElement('img');
    const description = document.createElement('div');
    
    const rating = document.createElement('div');
    const ratingValue = document.createElement('p');
    const stars = document.createElement('div');
    for (let i = 0; i < this.getAttribute('rating'); i++) {
      const star = document.createElement('span');
      star.textContent = '★';
      stars.appendChild(star);
    }

    const title = document.createElement('div');
    const productTitle = document.createElement('h1');

    const priceInformation = document.createElement('div');
    const prices = document.createElement('div');
    const price = document.createElement('p');
    const discountedPrice = document.createElement('p');
    const discount = document.createElement('p');

    container.classList.add('container');
    description.classList.add('description');

    rating.classList.add('rating');
    stars.classList.add('stars');

    title.classList.add('title');

    priceInformation.classList.add('price-info');
    prices.classList.add('prices');
    discountedPrice.classList.add('discounted-price');

    let imageUrl;
    if (this.getAttribute('image-url')) {
      imageUrl = this.getAttribute('image-url');
    } else {
      imageUrl = 'https://via.placeholder.com/300';
    }
    image.src = imageUrl;

    ratingValue.textContent = `Calificación: ${this.getAttribute('rating')}`;
    productTitle.textContent = this.getAttribute('title');
    price.textContent = `$${this.getAttribute('price')}`;
    discountedPrice.textContent = `Normal: $${this.getAttribute('discounted-price')}`;
    discount.textContent = `Descuento: ${this.getAttribute('discount')}%`;


    const style = document.createElement('style');
    style.textContent = `
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 3px;
        padding: 3%;
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
        height: auto;
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

      .discounted-price {
        text-decoration: line-through;
      }
    `
    shadow.appendChild(style);
    shadow.appendChild(container);

    container.appendChild(image);
    container.appendChild(description);

    description.appendChild(rating);
    rating.appendChild(ratingValue);
    rating.appendChild(stars);

    description.appendChild(title);
    title.appendChild(productTitle);

    description.appendChild(priceInformation);
    priceInformation.appendChild(prices);
    priceInformation.appendChild(discount);
    prices.appendChild(price);
    prices.appendChild(discountedPrice);
  }
  disconnectedCallBack() {
    // TODO
  }
  adoptedCallBack() {
    // TODO
  }
  attributeChangedCallBack(name, oldValue, newValue) {
    console.log(
      `Attribute: ${name} changed from ${oldValue} to ${newValue}`
    )
  }
}

customElements.define('sell-item', SellItem);