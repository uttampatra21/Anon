let loveItemstr = localStorage.getItem("favorite");
favorite = loveItemstr ? JSON.parse(loveItemstr) : [];

const favoriteData = (from = 0, to = 4) => {
  let fdata = favorite.slice(from, to);
  let data = fdata
    .map((x) => {
      return `
  
        <div class="showcase">
          <div class="showcase-banner">
            <img
              src="/assets/images/products/01.png"
              alt="Elevated Colorblock Mens Slim Fit Polo"
              width="300"
              class="product-img default"
            />
            <img
              src="/assets/images/products/001.png"
              alt="Elevated Colorblock Mens Slim Fit Polo"
              width="300"
              class="product-img hover"
            />

            <p class="showcase-badge">40%</p>
            <div class="showcase-actions">
              <button style="display:flex" class="btn-action" onclick="removefrmBag(${x.id})">
              <i class='bx bx-x'></i>
              </button>

              <button class="btn-action">
                <ion-icon
                  name="eye-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="eye outline"
                ></ion-icon>
              </button>

              <button class="btn-action">
                <ion-icon
                  name="repeat-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="repeat outline"
                ></ion-icon>
              </button>

              <button
                class="btn-action"
                onclick="addToBag(this)"
                data-itemobj='{"id":"10001","title":"Elevated Colorblock Mens Slim Fit Polo","category":"Shoes","image":"/assets/images/products/01.png","imageAlt":"/assets/images/products/001.png","off":"40","discountPrice":"₹320","currentPrice":"₹2,699,00","collection":"deal of the day","description":"Step up your game with the Elevated Colorblock Mens Slim Fit Polo. With a classic Cat logo and front"}'
              >
                <ion-icon
                  name="bag-add-outline"
                  role="img"
                  class="md hydrated"
                  aria-label="bag add outline"
                ></ion-icon>
              </button>
            </div>
          </div>

          <div class="showcase-content">
            <a href="#" class="showcase-category">Shoes</a>

            <a href="/assets/pages/product.html">
              <h3 class="showcase-title">
                Elevated Colorblock Mens Slim Fit Polo
              </h3>
            </a>

            <div class="showcase-rating">
              <ion-icon
                name="star"
                role="img"
                class="md hydrated"
                aria-label="star"
              ></ion-icon>
              <ion-icon
                name="star"
                role="img"
                class="md hydrated"
                aria-label="star"
              ></ion-icon>
              <ion-icon
                name="star"
                role="img"
                class="md hydrated"
                aria-label="star"
              ></ion-icon>
              <ion-icon
                name="star-outline"
                role="img"
                class="md hydrated"
                aria-label="star outline"
              ></ion-icon>
              <ion-icon
                name="star-outline"
                role="img"
                class="md hydrated"
                aria-label="star outline"
              ></ion-icon>
            </div>

            <div class="price-box">
              <p class="price">₹320</p>
              <del>₹2,699,00</del>
            </div>
          </div>
        </div>
  
  `;
    })
    .join(" ");
  document.getElementById("fv-item").innerHTML = data;
};
favoriteData();

const removefrmBag = (id) => {
  favorite = favorite.filter((item) => item.id != id);
  localStorage.setItem("favorite", JSON.stringify(favorite));
  heartCount();
  favoriteData();
};

// +============== PAGINATION
let btn = () => {
  let fvtNUmber = favorite.length / 4;
  if (fvtNUmber.toString().indexOf(".") !== -1) {
    fvtNUmber = fvtNUmber + 1;
  }

  let skipdata = 0;
  let loaddata = 4;
  for (let i = 1; i < fvtNUmber; i++) {
    let bt = `<li id="allBtn" id="pageBtn" skipdata="${skipdata}" loaddata="${loaddata}">${i}</li>`;
    document.getElementById("Nxt").innerHTML += bt;
    skipdata = skipdata + 4;
    loaddata = loaddata + 4;
  }
  let btns = document.querySelectorAll("#allBtn");
  btns[0].classList.add("active-page-btn");
  btns.forEach((x) => {
    x.onclick = () => {
      for (let b of btns) {
        b.classList.remove("active-page-btn");
      }
      x.classList.add("active-page-btn");

      let skip = x.getAttribute("skipdata");
      let load = x.getAttribute("loaddata");
      favoriteData(skip, load);
    };
  });
};
btn();
