let totalPrice = 0 ;


function handleCLikBtn(card) {
    const selectedItemList = document.getElementById("card-itemlist");
    const cardName = card.querySelector(".card-title").textContent;
    const li = document.createElement("li");
    li.innerText = cardName;
    selectedItemList.appendChild(li);

    const cardPrice = card.querySelector(".card-body p").textContent;
    
    totalPrice =parseFloat(totalPrice) + parseFloat(cardPrice);

    const totalP = document.getElementById("total-price") ;
    totalP.innerText = totalPrice.toFixed(2);

    const makePurchaseButton = document.getElementById("make-purchase");
    if (totalPrice > 0) {
      makePurchaseButton.removeAttribute("disabled");
    } else {
      makePurchaseButton.setAttribute("disabled", "disabled");
    }


    const total = document.getElementById("total");
      total.innerText = totalPrice.toFixed(2);

 }
