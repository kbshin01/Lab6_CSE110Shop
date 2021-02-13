// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
    
    // Element functionality written in here
    const wrapper = document.createElement('li');
    
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', this.getAttribute('image'));
    imgElement.setAttribute('alt', this.getAttribute('title'));
    imgElement.setAttribute('width', 200);
    wrapper.appendChild(imgElement);
    
    const titleElement = document.createElement('p');
    titleElement.setAttribute('class', 'title');
    titleElement.innerText = this.getAttribute('title');
    wrapper.appendChild(titleElement);

    const priceElement = document.createElement('p');
    priceElement.setAttribute('class', 'price');
    priceElement.innerText = this.getAttribute('price');
    wrapper.appendChild(priceElement);
    
    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('onclick', alert('Added to Cart!'));
    buttonElement.innerText = "Add to Cart";
    wrapper.appendChild(buttonElement);
    
    let cartCount = document.getElementById('cart-count');
    if (!(localStorage.getItem(this.getAttribute('id')))) {
      buttonElement.innerText = "Add to Cart";
    } else {
      buttonElement.innerText = "Remove from Cart";
      cartCount.innerText = ++cartCount.innerText;
    }
    buttonElement.addEventListener("click", function() {
      if (buttonElement.innerText == 'Add to Cart') {     
        alert('Added to Cart!');
        localStorage.setItem(this.getAttribute('id'), 'id');
        buttonElement.innerText = "Remove from Cart";
        cartCount.innerText = ++cartCount.innerText;
      } else {
        alert('Removed from Cart!');
        localStorage.removeItem(this.getAttribute('id'));
        buttonElement.innerText = "Add to Cart";
        cartCount.innerText = --cartCount.innerText;
      }
    });
    
    let style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }

    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }

    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;
    
    this.shadowRoot.append(style, wrapper);
    let overallStyle = document.createElement('link');
    overallStyle.setAttribute('rel', 'stylesheet');
    overallStyle.setAttribute('href', '../styles/styles.css');
    this.shadowRoot.appendChild(overallStyle);
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('product-item', ProductItem);
