document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageNumberDisplay = document.getElementById("pageNumber");

    let products = [];
    let filteredProducts = [];
    let currentPage = 1;
    const productsPerPage = 16;

    // Function to get the category from the URL
    function getCategoryFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get("category");
    }

    const selectedCategory = getCategoryFromURL();

    // Fetch products from JSON file
    fetch("./assets/json/products.json")
        .then(response => response.json())
        .then(data => {
            products = data;

            // Filter products based on the selected category
            if (selectedCategory) {
                filteredProducts = products.filter(product => product.category === selectedCategory);
            } else {
                filteredProducts = products;
            }

            renderProducts();
            updatePaginationButtons();
        })
        .catch(error => console.error("Error loading products:", error));

    function renderProducts() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        container.innerHTML = paginatedProducts.map(product => `
            <div class="col-4">
                <a href="product.html" class="product-link" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </a>
            </div>
        `).join('');

        document.querySelectorAll(".product-link").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const productId = e.currentTarget.getAttribute("data-id");
                localStorage.setItem("selectedProduct", productId);
                window.location.href = "product.html";
            });
        });

        pageNumberDisplay.textContent = currentPage;
    }

    function updatePaginationButtons() {
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage * productsPerPage >= filteredProducts.length;
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            updatePaginationButtons();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage * productsPerPage < filteredProducts.length) {
            currentPage++;
            renderProducts();
            updatePaginationButtons();
        }
    });
});
