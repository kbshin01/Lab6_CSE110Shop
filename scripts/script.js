// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if(myStorage.getItem('products') == null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('products', JSON.stringify(data));
      })
  }
});
