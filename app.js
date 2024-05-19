 const phones = [
    { id: 1, name: 'Google Pixel 7 Pro', price: 399, img: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg'},
    { id: 2, name: 'Realme 12 Pro+', price: 499, img: 'https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg' },
    { id: 3, name: 'vivo X100s Pro', price: 599, img: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-x100s-pro.jpg' },
    { id: 4, name: 'OnePlus 12', price: 699, img: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg' },
    { id: 5, name: 'Apple iPhone 14 Pro Max', price: 799, img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg' },
    { id: 6, name: 'Sony Xperia 1 V', price: 899, img: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg' },
    { id: 7, name: 'Apple iPhone 15 Pro', price: 999, img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg' },
    { id: 8, name: 'Motorola Edge 50 Ultra', price: 1099, img: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg' },
    { id: 9, name: 'Apple iPhone 15 Pro Max', price: 1199, img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg' },
    { id: 10, name: 'Google Pixel Fold', price: 1299, img: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-fold.jpg' },
    { id: 11, name: 'Apple iPad Air 13 (2024)', price: 1399, img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-13-2024.jpg' },
    { id: 12, name: 'Apple iPad Pro 13 (2024)', price: 1499, img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-13-2024.jpg' },
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


