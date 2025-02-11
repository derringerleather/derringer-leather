document.addEventListener("DOMContentLoaded", () => {
    const orderSummary = document.getElementById("order-summary");
    const checkoutForm = document.getElementById("checkout-form");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderOrderSummary() {
        if (cart.length === 0) {
            orderSummary.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        orderSummary.innerHTML = cart.map(item => `
            <div class="order-item">
                <h4>${item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        `).join('');

        let total = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
        orderSummary.innerHTML += `<h3>Total: $${total.toFixed(2)}</h3>`;
    }

    function appendCartToForm() {
        const existingInputs = document.querySelectorAll(".cart-item-input");
        existingInputs.forEach(input => input.remove()); // Remove old inputs if any

        cart.forEach((item, index) => {
            let input = document.createElement("input");
            input.type = "hidden";
            input.name = `cart_item_${index + 1}`;
            input.value = `${item.name} - ${item.quantity} x ${item.price}`;
            input.classList.add("cart-item-input");
            checkoutForm.appendChild(input);
        });

        let totalInput = document.createElement("input");
        totalInput.type = "hidden";
        totalInput.name = "total_amount";
        totalInput.value = `$${cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2)}`;
        totalInput.classList.add("cart-item-input");
        checkoutForm.appendChild(totalInput);
    }

    checkoutForm.addEventListener("submit", appendCartToForm);
    renderOrderSummary();
});
