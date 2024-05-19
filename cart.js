   // Function to load cart items from local storage
   function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'card mb-3';
        cartItem.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Price: $${item.price}</p>
                <p class="card-text">Quantity: ${item.quantity}</p>
                <p class="card-text">Total: $${item.price * item.quantity}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Function to handle checkout
function checkout() {
    alert('Proceeding to checkout');
    localStorage.removeItem('cart'); // Clear the cart
    loadCart(); // Reload the cart to reflect changes
}

// Load cart items on page load
window.onload = loadCart;
