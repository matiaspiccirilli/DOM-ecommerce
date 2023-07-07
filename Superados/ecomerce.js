const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', AddToCartClicked)
})  

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartitemsContainer'
  );

function AddToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');
  
  const itemTitle = item.querySelector(".item-title").textContent;
  const itemPrice = item.querySelector(".item-price").textContent;
  const itemImage = item.querySelector(".item-img").src;

  AddItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function AddItemToShoppingCart(itemTitle, itemPrice, itemImage) { 
  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

  //me quede en el minuto  28:32 https://www.google.com/search?q=como+hacer+ecommerce+con+carrito+en+JS&oq=como+hacer+ecommerce+con+carrito+en+JS&aqs=chrome..69i57j33i160l4j33i22i29i30.12157j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:15ddd3b5,vid:dSbWJAXQ7cA

    updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal')
  
  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')
  
  shoppingCartItems.forEach( shoppingCartItem => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice'
    )
    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
    
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')
    
    const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
    
    total = total + shoppingCartItemPrice*shoppingCartItemQuantity;
  })
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`
}

