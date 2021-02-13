// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('products') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        window.localStorage.setItem('products', JSON.stringify(data));
      });
  }
  
  let products = JSON.parse(localStorage.getItem('products'));
  for (let i = 0; i < products.length; i++) {
    let productItem = document.createElement('product-item');
    productItem.setAttribute('id', products[i].id);
    productItem.setAttribute('image', products[i].image);
    productItem.setAttribute('title', products[i].title);
    productItem.setAttribute('price', products[i].price);
    document.getElementById('product-list').appendChild(productItem);
  }
});
