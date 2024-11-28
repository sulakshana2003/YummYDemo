//mokk hari waradunoth kalin hadpu js ek add krnn

  function addToCart(productName, price, quantityId) {
    let quantity = document.getElementById(quantityId).value;
    quantity = parseInt(quantity, 10);

    if (isNaN(quantity) || quantity < 1) {
        alert('Please enter a valid quantity.');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // product ek list eke thiyed blnn
    let productInCart = cart.find(item => item.productName === productName);

    if (productInCart) {
        productInCart.quantity += quantity; 
    } else {
        cart.push({ productName, price, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to the cart!`);
}



function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}


function renderCart() {
  const cartItems = getCartItems();
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalContainer = document.getElementById('cart-total');

  cartItemsContainer.innerHTML = ''; 
  let totalAmount = 0;

  if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = `
          <tr>
              <td colspan="5">Your cart is empty!</td>
          </tr>
      `;
  } else {
      cartItems.forEach((item, index) => {
          const totalPrice = item.price * item.quantity;
          totalAmount += totalPrice;

          cartItemsContainer.innerHTML += `
              <tr>
                  <td>${item.productName}</td>
                  <td>LKR ${item.price.toFixed(2)}</td>
                  <td>
                      <button class="quantity-button" onclick="decreaseQuantity(${index})">-</button>
                      ${item.quantity}
                      <button class="quantity-button" onclick="increaseQuantity(${index})">+</button>
                  </td>
                  <td>LKR ${totalPrice.toFixed(2)}</td>
                  <td>
                      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                  </td>
              </tr>
          `;
      });
  }

  cartTotalContainer.textContent = totalAmount.toFixed(2); 
}


function increaseQuantity(index) {
  const cartItems = getCartItems();
  cartItems[index].quantity += 1; 
  localStorage.setItem('cart', JSON.stringify(cartItems)); 
  renderCart(); 
}


function decreaseQuantity(index) {
  const cartItems = getCartItems();

  if (cartItems[index].quantity > 1) {
      cartItems[index].quantity -= 1; 
  } else {
      removeItem(index);
  }

  localStorage.setItem('cart', JSON.stringify(cartItems)); 
  renderCart(); 
}


function removeItem(index) {
  const cartItems = getCartItems();
  cartItems.splice(index, 1); 
  localStorage.setItem('cart', JSON.stringify(cartItems)); 
  renderCart(); 
}


function clearCart() {
  localStorage.removeItem('cart');
  renderCart(); 
}


document.addEventListener('DOMContentLoaded', renderCart);
