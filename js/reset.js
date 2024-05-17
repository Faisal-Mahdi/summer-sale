function resetCart() {
    total = 0;
    promoCodeApplied = false;
    document.getElementById('card-itemlist').innerHTML = '';
    document.getElementById('total-price').innerText = '00.00';
    document.getElementById('discount-price').innerText = '00.00';
    document.getElementById('total').innerText = '00.00';
    document.getElementById('cupon-input').value = ''; 
  }
  
  document.getElementById("home").addEventListener('click', function () {
    resetCart();
  });