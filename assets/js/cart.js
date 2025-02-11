document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cartTotal");
    const clearCartBtn = document.getElementById("clearCart");
    const checkoutBtn = document.getElementById("checkoutBtn");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "$0.00";
            return;
        }

        cartContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Qty: <input type="number" class="cart-qty" data-index="${index}" value="${item.quantity}" min="1"></p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            </div>
        `).join('');

        updateTotal();
    }

    function updateTotal() {
        let total = cart.reduce((sum, item) => {
            return sum + (parseFloat(item.price.replace('$', '')) * item.quantity);
        }, 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Update quantity
    cartContainer.addEventListener("change", (event) => {
        if (event.target.classList.contains("cart-qty")) {
            let index = event.target.getAttribute("data-index");
            cart[index].quantity = parseInt(event.target.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateTotal();
        }
    });

    // Remove item
    cartContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            let index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Clear Cart
    clearCartBtn.addEventListener("click", () => {
        localStorage.removeItem("cart");
        cart = [];
        renderCart();
    });

    renderCart();
});

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items before proceeding to checkout.");
        } else {
            window.location.href = "checkout.html";
        }
    });
}
