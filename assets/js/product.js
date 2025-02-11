document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-container");
    const productId = localStorage.getItem("selectedProduct");

    if (!productId) {
        window.location.href = "collection.html"; // Redirect if no product is selected
        return;
    }

    fetch("./assets/json/products.json")
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);

            if (!product) {
                window.location.href = "collection.html"; // Redirect if product not found
                return;
            }

            // Populate product details dynamically
            productContainer.innerHTML = `
                <div class="col-2">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="col-2">
                    <h2>${product.name}</h2>
                    <h2>${product.price}</h2>
                    <h2>Color: ${product.color || "N/A"}</h2>
                    <h2>Qty</h2>
                    <input type="number" id="quantity" value="1" min="1">
                    <button class="btn" id="addToCart">Add to Cart</button>
                    <div class="accordion">
                        <div class="tab">
                            <input type="checkbox" id="tab1">
                            <label for="tab1">Description</label>
                            <div class="tab-content">
                                <p>${product.description || "No description available."}</p>
                            </div>
                        </div>
                
                        <div class="tab">
                            <input type="checkbox" id="tab2">
                            <label for="tab2">Shipping</label>
                            <div class="tab-content">
                                <p>We use UPS or USPS to ship our orders. The responsibility for delivery transfers to the carrier once your package leaves our facility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Add event listener for "Add to Cart" button
            document.getElementById("addToCart").addEventListener("click", () => {
                const selectedQty = parseInt(document.getElementById("quantity").value);

                if (isNaN(selectedQty) || selectedQty < 1) {
                    alert("Please enter a valid quantity.");
                    return;
                }

                const cartItem = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: selectedQty
                };

                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(cartItem);
                localStorage.setItem("cart", JSON.stringify(cart));

                window.location.href = "cart.html"; // Redirect to cart page
            });
        })
        .catch(error => console.error("Error loading product details:", error));
});
