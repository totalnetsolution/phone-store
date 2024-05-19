 const phones = [
    { id: 1, name: 'Apple Iphone 13 Pro Max', price: 699, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg'},
    { id: 2, name: 'Samsung Galaxy S24', price: 799, img: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-5g-sm-s921-1.jpg' },
    { id: 3, name: 'Phone 3', price: 899, img: 'phone3.jpg' },
    { id: 4, name: 'Phone 4', price: 999, img: 'phone4.jpg' },
    { id: 5, name: 'Phone 5', price: 1099, img: 'phone5.jpg' },
    { id: 6, name: 'Phone 6', price: 1199, img: 'phone6.jpg' },
    { id: 7, name: 'Phone 7', price: 1299, img: 'phone7.jpg' },
    { id: 8, name: 'Phone 8', price: 1399, img: 'phone8.jpg' },
    { id: 9, name: 'Phone 9', price: 1499, img: 'phone9.jpg' },
    { id: 10, name: 'Phone 10', price: 1599, img: 'phone10.jpg' },
    { id: 11, name: 'Phone 11', price: 1699, img: 'phone11.jpg' },
    { id: 12, name: 'Phone 12', price: 1799, img: 'phone12.jpg' },
];

const phoneCards = document.getElementById('phone-cards');
phones.forEach(phone => {
    const card = document.createElement('div');
    card.className = 'col-md-4 rounded-pill';
    card.innerHTML = `
        <div class="card">
            <img src="${phone.img}" class="card-img-top" alt="${phone.name}">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text">$${phone.price}</p>
                <div class="d-flex justify-content-between w-100">
                    <button class="btn btn-secondary" onclick="changeQuantity(${phone.id}, -1)">-</button>
                    <span id="quantity-${phone.id}">0</span>
                    <button class="btn btn-secondary" onclick="changeQuantity(${phone.id}, 1)">+</button>
                </div>
                <button class="btn btn-primary mt-3" onclick="addToCart(${phone.id})">Add to Cart</button>
            </div>
        </div>
    `;
    phoneCards.appendChild(card);
});

function changeQuantity(phoneId, change) {
    const quantityElement = document.getElementById(`quantity-${phoneId}`);
    let quantity = parseInt(quantityElement.innerText);
    quantity = Math.max(0, quantity + change); 
    quantityElement.innerText = quantity;
}

function addToCart(phoneId) {
    const quantityElement = document.getElementById(`quantity-${phoneId}`);
    const quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const phone = phones.find(p => p.id === phoneId);
        const cartItem = { ...phone, quantity };
        cart = cart.filter(item => item.id !== phoneId); 
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${phone.name} added to cart`);
    } else {
        alert('Please select a quantity greater than 0');
    }
}


