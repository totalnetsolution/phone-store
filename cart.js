function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = $('#cart-items');
    cartItems.empty();
    let totalAmount = 0;

    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
        cartItems.append(`
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Price: $${item.price}</p>
                    <div class="quantity-controls">
                        <button class="btn btn-secondary btn-sm" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span id="cart-quantity-${item.id}">${item.quantity}</span>
                        <button class="btn btn-secondary btn-sm" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="btn btn-danger mt-2" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `);
    });

    $('#total-amount').text(`Total: $${totalAmount}`);
}

function updateCartQuantity(id, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    if (item) {
        if (item.quantity + change > 0) {
            item.quantity += change;
        } else {
            cart.splice(cart.indexOf(item), 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

function removeFromCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    if (item) {
        cart.splice(cart.indexOf(item), 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

function checkout() {
    alert('Checking out...');
    localStorage.removeItem('cart');
    loadCart();
}

$(document).ready(function() {
    loadCart();
});