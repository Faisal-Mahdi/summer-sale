document.getElementById("apply-btn").addEventListener('click', function(){
    const cuponInput = document.getElementById("cupon-input");
    const cupon = cuponInput.value;

    if (cupon === "SELL200" && totalPrice >= 200) {
        const discountAmount = totalPrice * 0.2;
        const discountedTotal = totalPrice - discountAmount;

        const discountPriceElement = document.getElementById("discount-price");
        discountPriceElement.innerText = discountAmount.toFixed(2);

        const totalP = document.getElementById("total");
        totalP.innerText = discountedTotal.toFixed(2);
    }


});
