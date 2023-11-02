// const hour = document.getElementById("hour");
// const min = document.getElementById("min");
// const sec = document.getElementById("sec");
// let countDown = () => {
//   let futureDate = new Date("20 nov 2023");
//   let currentDate = new Date();

//   let presentDate = futureDate - currentDate;
//   let days = Math.floor(presentDate / 1000 / 60 / 60 / 24);
//   let hour = Math.floor(presentDate / 1000 / 60 / 60) % 60;
//   let min = Math.floor(presentDate / 1000 / 60) % 60;
//   let sec = Math.floor(presentDate / 1000) % 60;
//   document.querySelectorAll("#days").innerHTML = days;
// };
// countDown();
// setInterval(countDown, 1000);

{
  const header = document.getElementById("main-header");

  const headerHTML = `
  <div class="header-top">
        <div class="container">
          <ul class="header-social-container">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>

          <div class="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over -₹3,399.00
            </p>
          </div>

          <div class="header-top-actions">
            <select name="currency">
              <option value="usd">USD &dollar;</option>
              <option value="eur">EUR &euro;</option>
            </select>

            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Espa&ntilde;ol</option>
              <option value="fr">Fran&ccedil;ais</option>
            </select>
          </div>
        </div>
      </div>

      <div class="header-main">
        <div class="container">
          <a href="/" class="header-logo">
            <img
              src="/assets/images/logo/puma-removebg-preview.png"
              alt="puma's logo"
              width="50px"
              style="object-fit: cover"
            />
          </a>

          <div class="header-search-container">
            <input
              
              name="search"
              class="search-field"
              placeholder="Enter your product name..."
            />

            <button class="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <div class="header-user-actions">
            <button class="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>

            <a href="/assets/pages/favorite.html" class="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span class="count" id="heartItem">0</span>
            </a>

            <a href="/assets/pages/bag.html" class="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span class="count" id="cartItem">0</span>
            </a>
          </div>
        </div>
      </div>

      <nav class="desktop-navigation-menu">
        <div class="container">
          <ul class="desktop-menu-category-list">
            <li class="menu-category">
            <a href="/">
              <img
                width="30px"
                src="/assets/images/logo/puma-removebg-preview.png"
                alt=""
              />
              </a>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Outlet</a>

              <div class="dropdown-panel">
                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Shoes</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Snikers</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Running</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Walking</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Traning & Gym</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Nitro</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="https://static.pxlecdn.com/photos/609418139/medium/0e22c5f052d815cc445a.jpg"
                        alt="headphone collection"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Clothing</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Sports</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Hoodies</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="https://static.pxlecdn.com/photos/617923738/medium/f239974463ffa712aafb.jpg"
                        alt="men's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Accessories</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Bagpacks</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Schoks</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Wallets</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Gloves</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Face Masks</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="https://static.pxlecdn.com/photos/618343074/medium/519e42b14d3a6915f37a.jpg"
                        alt="women's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Sports</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Cricket</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Busketball</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Hockey</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Track</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Montserrat</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="https://static.pxlecdn.com/photos/614031825/medium/a1a4ec3a80cd8768387f.jpg"
                        alt="mouse collection"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Men's</a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Shirt</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Women's</a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Shoes</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Clothings</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Sports</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Motorsports</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Motorsport</a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">BMW M Motorsport</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Ferrari</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Mercedice</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Legecy</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Colaborations</a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Blog</a>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Hot Offers</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="mobile-bottom-navigation">
        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <a href="./assets/pages/bag.html" class="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span class="count">0</span>
        </a>

        <button class="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button class="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span class="count">0</span>
        </button>

        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      <nav class="mobile-navigation-menu has-scrollbar" data-mobile-menu>
        <div class="menu-top">
          <h2 class="menu-title">Menu</h2>

          <button class="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="mobile-menu-category-list">
          <li class="menu-category">
            <a href="#" class="menu-title">Home</a>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Men's</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">Shirt</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Shorts & Jeans</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Safety Shoes</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Wallet</a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Women's</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">Dress & Frock</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Earrings</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Necklace</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Makeup Kit</a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Jewelry</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">Earrings</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Couple Rings</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Necklace</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Bracelets</a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Perfume</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">Clothes Perfume</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Deodorant</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Flower Fragrance</a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">Air Freshener</a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <a href="#" class="menu-title">Blog</a>
          </li>

          <li class="menu-category">
            <a href="#" class="menu-title">Hot Offers</a>
          </li>
        </ul>

        <div class="menu-bottom">
          <ul class="menu-category-list">
            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Language</p>

                <ion-icon
                  name="caret-back-outline"
                  class="caret-back"
                ></ion-icon>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="#" class="submenu-title">English</a>
                </li>

                <li class="submenu-category">
                  <a href="#" class="submenu-title">Espa&ntilde;ol</a>
                </li>

                <li class="submenu-category">
                  <a href="#" class="submenu-title">Fren&ccedil;h</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Currency</p>
                <ion-icon
                  name="caret-back-outline"
                  class="caret-back"
                ></ion-icon>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="#" class="submenu-title">USD &dollar;</a>
                </li>

                <li class="submenu-category">
                  <a href="#" class="submenu-title">EUR &euro;</a>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="menu-social-container">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  `;
  header.innerHTML = headerHTML;
}

// === SEARCH

{
  const searchBox = document.querySelector("#search");

  const searchHTML = `
  <div id="content">
        <div id="search-header">
          <form id="search-bar">
            <input
              onkeyup="search()"
              id="search-input"
              type="text"
              placeholder="SEARCH PUMA.COM"
            />
            <i class="bx bx-x" onclick="closeSearch()"></i>
          </form>
        </div>
        <div id="search-list">
          <div id="search-grid">
            <div id="tranding-search">
              <h3>TRENDING SEARCHES</h3>
              <ul>
                <li>Shoes for Men</li>
                <li>Sneakers</li>
                <li>Shoes</li>
                <li>Slides</li>
              </ul>
            </div>

            <div id="recently-viewed">
              <h3>RECENTLY VIEWED</h3>
              <ul id="products"></ul>
            </div>
          </div>
        </div>
      </div>
  `;

  searchBox.innerHTML = searchHTML;
}
// === FOOTER

{
  const footer = document.getElementById("main-footer");

  const footerHTML = `
  
  <div class="footer-category">
        <div class="container">
          <h2 class="footer-category-title">Brand directory</h2>

          <div class="footer-category-box">
            <h3 class="category-box-title">Fashion :</h3>

            <a href="#" class="footer-category-link">T-shirt</a>
            <a href="#" class="footer-category-link">Shirts</a>
            <a href="#" class="footer-category-link">shorts & jeans</a>
            <a href="#" class="footer-category-link">jacket</a>
            <a href="#" class="footer-category-link">dress & frock</a>
            <a href="#" class="footer-category-link">innerwear</a>
            <a href="#" class="footer-category-link">hosiery</a>
          </div>

          <div class="footer-category-box">
            <h3 class="category-box-title">footwear :</h3>

            <a href="#" class="footer-category-link">sport</a>
            <a href="#" class="footer-category-link">formal</a>
            <a href="#" class="footer-category-link">Boots</a>
            <a href="#" class="footer-category-link">casual</a>
            <a href="#" class="footer-category-link">cowboy shoes</a>
            <a href="#" class="footer-category-link">safety shoes</a>
            <a href="#" class="footer-category-link">Party wear shoes</a>
            <a href="#" class="footer-category-link">Branded</a>
            <a href="#" class="footer-category-link">Firstcopy</a>
            <a href="#" class="footer-category-link">Long shoes</a>
          </div>

          <div class="footer-category-box">
            <h3 class="category-box-title">sportwere :</h3>

            <a href="#" class="footer-category-link">Track suits</a>
            <a href="#" class="footer-category-link">Inner</a>
            <a href="#" class="footer-category-link">Trowsers</a>
            <a href="#" class="footer-category-link">Hoodies</a>
          </div>

          <div class="footer-category-box">
            <h3 class="category-box-title">accessories :</h3>

            <a href="#" class="footer-category-link">bands</a>
            <a href="#" class="footer-category-link">cap</a>
            <a href="#" class="footer-category-link">glasses</a>
            <a href="#" class="footer-category-link">glasses</a>
            <a href="#" class="footer-category-link">glasses</a>
          </div>
        </div>
      </div>

      <div class="footer-nav">
        <div class="container">
          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Popular Categories</h2>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Fashion</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Electronic</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Cosmetic</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Health</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Watches</a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Products</h2>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Prices drop</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">New products</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Best sales</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Contact us</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Sitemap</a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Our Company</h2>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Delivery</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Legal Notice</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Terms and conditions</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">About us</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Secure payment</a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Services</h2>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Prices drop</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">New products</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Best sales</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Contact us</a>
            </li>

            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">Sitemap</a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Contact</h2>
            </li>

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <address class="content">
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <a href="tel:+607936-8058" class="footer-nav-link"
                >(607) 936-8058</a
              >
            </li>

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a href="mailto:example@gmail.com" class="footer-nav-link"
                >example@gmail.com</a
              >
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Follow Us</h2>
            </li>

            <li>
              <ul class="social-link">
                <li class="footer-nav-item">
                  <a href="#" class="footer-nav-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li class="footer-nav-item">
                  <a href="#" class="footer-nav-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li class="footer-nav-item">
                  <a href="#" class="footer-nav-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li class="footer-nav-item">
                  <a href="#" class="footer-nav-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <img
            src="/assets/images/payment.png"
            alt="payment method"
            class="payment-img"
          />

          <p class="copyright">
            Copyright &copy; <a href="#">puma</a> all rights reserved.
          </p>
        </div>
      </div>
  `;

  footer.innerHTML = footerHTML;
}
