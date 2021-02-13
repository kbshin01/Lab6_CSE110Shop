// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('products') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        window.localStorage.setItem('products', JSON.stringify(data));
      });
  }
  
  let products = JSON.parse(window.localStorage.getItem('products'));
  for (let i = 0; i < products.length; i++) {
    let productItem = document.createElement('product-item');
    productItem.setAttribute('id', products[i].getAttribute('id'));
    productItem.setAttribute('image', products[i].getAttribute('image'));
    productItem.setAttribute('title', products[i].getAttribute('title'));
    productItem.setAttribute('price', products[i].getAttribute('price'));
    document.getElementById('product-list').appendChild(productItem);
  }
});
