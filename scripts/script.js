// Script.js

window.addEventListener('DOMContentLoaded', () => {
  //if (localStorage.getItem('products') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('products', JSON.stringify(data));
      });
  //}
  
  for (let i = 0; i < data.length; i++) {
    let productItem = document.createElement('product-item');
    productItem.setAttribute('id', data[i].getAttribute('id'));
    productItem.setAttribute('image', data[i].getAttribute('image'));
    productItem.setAttribute('title', data[i].getAttribute('title'));
    productItem.setAttribute('price', data[i].getAttribute('price'));
    (document.getElementById('product-list')).appendChild(productItem);
  }
});
