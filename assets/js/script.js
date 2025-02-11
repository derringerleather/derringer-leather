const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
        <div class="logo">
            <a href="index.html">
            <img src="./assets/images/logo.webp" alt="">
            </a>
        </div>
        <nav>
            <div class="dropdown">
                <span>Mens</span>
                <div class="dropdown-content">
                  <a href="collection.html?category=Mens%20Leather%20Jacket"><p>Jackets</p></a>
                  <a href="collection.html?category=Mens%20Leather%20Vest"><p>Vest</p></a>
                  <a href="collection.html?category=Mens%20Leather%20Chaps"><p>Chaps</p></a>
                  <a href="collection.html?category=Mens%20Flannel%20Shirt"><p>Flannels</p></a>
                  <a href="collection.html?category=Cowboy%20Hat"><p>Cowboy Hats</p></a>
                  <a href="collection.html?category=Top%20Hat"><p>Top Hats</p></a>
                  <a href="collection.html?category=Mens%20Boots"><p>Boots</p></a>
                </div>
            </div>
            <div class="dropdown">
                <span>Womens</span>
                <div class="dropdown-content">
                  <a href="collection.html?category=Ladies%20Leather%20Jacket"><p>Jackets</p></a>
                  <a href="collection.html?category=Ladies%20Flannel%20Shirt"><p>Flannels</p></a>
                  <a href="collection.html?category=Ladies%20Leather%20Vest"><p>Vests</p></a>
                  <a href="collection.html?category=Ladies%20Leather%20Chaps"><p>Chaps</p></a>
                  <a href="collection.html?category=Clip%20on%20Bag"><p>Clip on Bags</p></a>
                  <a href="collection.html?category=Thigh%20Bag"><p>Thigh Bags</p></a>
                  <a href="collection.html?category=Ladies%20Boots"><p>Boots</p></a>
                </div>
            </div>
            <div class="dropdown">
                <span>Accessories</span>
                <div class="dropdown-content">
                  <a href="collection.html?category=Vest%20Extender"><p>Vest Extenders</p></a>
                  <a href="collection.html?category=Vest%20Laces"><p>Vest Laces</p></a>
                  <a href="collection.html?category=Biker%20Chain%20Wallet"><p>Biker Wallets</p></a>
                  <a href="collection.html?category=Biker%20Get%20Back%20Whip"><p>Biker Whips</p></a>
                  <a href="collection.html?category=Leather%20Belt"><p>Leather Belts</p></a>
                </div>
            </div>
        </nav>
    </header>
    `;
}

createHeader();

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>
        <div class="row">
            <div class="col-4">
                <h3>ABOUT US</h3>
                <p>Derringer Leather</p>
                <p>50 Richboynton Rd Dover, NJ 07801</p>
                <p>Phone: 201-531-1777</p>
                <p>Fax: (973) 343-6129</p>
                <p>info@derringerleather.com</p>
                <p>Mon to Fri 9 am to 5 pm</p>
            </div>
            <div class="col-4">
                <h3>SHOP</h3>
                <a href="jackets.html"><p>Jackets</p></a>
                <a href="collection.html?category=Ladies%20Leather%20Vest"><p>Womens</p></a>
                <a href="flannels.html"><p>Flannels</p></a>
                <a href="hats.html"><p>Hats</p></a>
                <a href="ladies-bags.html"><p>Ladies Bags</p></a>
                <a href="accessories.html"><p>Accessories</p></a>
            </div>
            <div class="col-4">
                <h3>QUICK LINKS</h3>
                <a href="become-a-dealer.html"><p>Become a Dealer</p></a>
                <a href="contact.html"><p>Contact us</p></a>
                <a href="https://unik.b2b.apparelmagic.com/login.php" target="_blank"><p>Dealer Login</p></a>
                <a href="shipping.html"><p>Shipping & Return Policy</p></a>
                <a href="about.html"><p>About us</p></a>
                <a href="privacy-policy.html"><p>Privacy Policy</p></a>
                <a href="terms-of-service.html"><p>Terms of Service</p></a>
            </div>
            <div class="col-4">
                <img src="./assets/images/logo.webp" alt="">
            </div>
        </div>
    </footer>
    `;
}

createFooter();