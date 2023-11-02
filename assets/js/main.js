window.addEventListener("load", () => {
  let bagItemsstr = localStorage.getItem("busket");
  busket = bagItemsstr ? JSON.parse(bagItemsstr) : [];

  let loveItemstr = localStorage.getItem("favorite");
  favorite = loveItemstr ? JSON.parse(loveItemstr) : [];
  fetchApi();
  count();
  heartCount();
});
const fetchApi = async () => {
  const api = `http://localhost:3000/products`;
  const response = await fetch(api);
  const data = await response.json();
  dealOfTheDay(data);
  const datav = (from = 0, to = 4) => {
    let filter = data.slice(from, to);
    let dataItems = filter
      .map((x) => {
        return `
                <div class="showcase">
                  <div class="showcase-banner">
                    <img
                      src="${x.image}"
                      alt="${x.title}"
                      width="300"
                      class="product-img default"
                    />
                    <img
                      src="${x.imageAlt}"
                      alt="${x.title}"
                      width="300"
                      class="product-img hover"
                    />

                    <p class="showcase-badge">${x.off}%</p>
                    <div class="showcase-actions">
                      <button class="btn-action" onclick="addToLove(this)" data-heartdata='${JSON.stringify(
                        x
                      )}'>
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <button class="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <button class="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <button class="btn-action" onclick="addToBag(this)" data-itemobj='${JSON.stringify(
                        x
                      )}'>
                        <ion-icon name="bag-add-outline"></ion-icon>
                      </button>
                    </div>
                  </div>

                  <div class="showcase-content">
                    <a href="#" class="showcase-category">${x.category}</a>

                    <a href="/assets/pages/product.html">
                      <h3 class="showcase-title">
                        ${x.title}
                      </h3>
                    </a>

                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>

                    <div class="price-box">
                      <p class="price">${x.discountPrice}</p>
                      <del>${x.currentPrice}</del>
                    </div>
                  </div>
                </div>
    `;
      })
      .join(" ");

    const newProduct = document.getElementById("newProduct");
    if (!newProduct) return;
    newProduct.innerHTML = dataItems;
  };

  // Pagination Function
  datav();

  //
  // ================ NEW PRODUCTS ------------------------------------NEW PRODUCTS
  // ================ NEW PRODUCTS ------------------------------------NEW PRODUCTS
  // ================ NEW PRODUCTS ------------------------------------NEW PRODUCTS
  //

  const itemData = (data) => {
    let length = data.length / 4;
    if (length.toString().indexOf(".") != -1) {
      length = length + 1;
    }

    let pageList = document.getElementById("page-list");

    let skip = 0;
    let load = 4;
    for (let i = 1; i < length; i++) {
      if (!pageList) return;
      pageList.innerHTML += `<li class="" id="pageBtn" skipData="${skip}" loadData="${load}" >${i}</li>`;
      skip = skip + 4;
      load = load + 4;
    }
    const pageBtn = document.querySelectorAll("#pageBtn");
    pageBtn[0].classList.add("active-page-btn");
    pageBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        for (let b of pageBtn) {
          b.classList.remove("active-page-btn");
        }

        btn.classList.add("active-page-btn");

        let skipData = btn.getAttribute("skipData");
        let loadData = btn.getAttribute("loadData");
        datav(skipData, loadData);
      });
    });
  };
  itemData(data);
};

//
// ====== DEAL OF THE DAY  ----------------------------------------------DEAL OF THE DAY
// ====== DEAL OF THE DAY  ----------------------------------------------DEAL OF THE DAY
// ====== DEAL OF THE DAY  ----------------------------------------------DEAL OF THE DAY
// ====== DEAL OF THE DAY  ----------------------------------------------DEAL OF THE DAY
//

const dealOfTheDay = (data) => {
  let dealData = data
    .map((x) => {
      if (x.collection == "deal of the day") {
        return `

                <div class="showcase-container">
                  <div class="showcase">
                    <div class="showcase-banner">
                      <img
                        src="${x.image}"
                        alt="${x.title}"
                        class="showcase-img"
                      />
                    </div>

                    <div class="showcase-content">
                      <div class="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <a href="#">
                        <h3 class="showcase-title">
                          ${x.title}
                        </h3>
                      </a>

                      <p class="showcase-desc">
                        ${x.description}
                      </p>

                      <div class="price-box">
                        <p class="price">${x.discountPrice}</p>

                        <del>${x.currentPrice}</del>
                      </div>

                      <button class="add-cart-btn" onclick="addToBag(this)"  data-itemobj='${JSON.stringify(
                        x
                      )}'>add to cart</button>

                      <div class="showcase-status">
                        <div class="wrapper">
                          <p>already sold: <b>${x.sold}</b></p>

                          <p>available: <b>${x.available}</b></p>
                        </div>

                        <div class="showcase-status-bar"></div>
                      </div>

                      <div class="countdown-box">
                        <p class="countdown-desc">Hurry Up! Offer ends in:</p>
                        <div class="countdown">
                          <div class="countdown-content">
                            <p class="display-number" id="days">360</p>

                            <p class="display-text">Days</p>
                          </div>

                          <div class="countdown-content">
                            <p class="display-number" id="hour">24</p>
                            <p class="display-text">Hours</p>
                          </div>

                          <div class="countdown-content">
                            <p class="display-number" id="min">59</p>
                            <p class="display-text">Min</p>
                          </div>

                          <div class="countdown-content">
                            <p class="display-number" id="sec">00</p>
                            <p class="display-text">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
      `;
      }
    })
    .join(" ");
  const dealOfTheDay = document.getElementById("dealOfTheDay");
  if (!dealOfTheDay) return;
  dealOfTheDay.innerHTML = dealData;
};

//
// ====== NEW ARRIVAL TRANDING TOP RATED ----------------  NEW ARRIVAL TRANDING TOP RATED
// ====== NEW ARRIVAL TRANDING TOP RATED ----------------  NEW ARRIVAL TRANDING TOP RATED
// ====== NEW ARRIVAL TRANDING TOP RATED ----------------  NEW ARRIVAL TRANDING TOP RATED
// ====== NEW ARRIVAL TRANDING TOP RATED ----------------  NEW ARRIVAL TRANDING TOP RATED
//

const newArival = async () => {
  const response = await fetch("http://localhost:3000/cetagiriesBox");
  const data = await response.json();

  let elem = data
    .map((x) => {
      return `
              <div class="product-showcase">
                <h2 id="heading-title" header="${x.heading}" class="title">${
        x.heading
      }</h2>

                <div class="showcase-wrapper has-scrollbar">
                    ${categoriesProducts(x.products)}
                </div>
              </div>
    `;
    })
    .join(" ");
  const productMinimaContainer = document.querySelector(".product-minimal");
  if (!productMinimaContainer) return;
  productMinimaContainer.innerHTML = elem;
};
newArival();

const categoriesProducts = (data) => {
  return data
    .map((x) => {
      return category(x);
    })
    .join(" ");
};

const category = (x) => {
  return `
  <div class="showcase-container">
                    <div class="showcase">
                        <a href="/assets/pages/product.html" class="showcase-img-box" onclick="singelProduct(${x.id})>
                        <img
                            src=${x.image}
                            alt="relaxed short full sleeve t-shirt"
                            width="70"
                            class="showcase-img"/>
                        </a>
                    <div class="showcase-content">
                        <a href="#">
                            <h4 class="showcase-title">
                            ${x.title}
                            </h4>
                        </a>
                        <a href="#" class="showcase-category">${x.category}</a>
                        <div class="price-box">
                            <p class="price">${x.discountPrice}</p>
                            <del>${x.currentPrice}</del>
                        </div>
                    </div>
                </div>
                </div>
  `;
};

//
// ====== ADD TO BUSKET ----------------  ADD TO BUSKET
// ====== ADD TO BUSKET ----------------  ADD TO BUSKET
// ====== ADD TO BUSKET ----------------  ADD TO BUSKET
// ====== ADD TO BUSKET ----------------  ADD TO BUSKET
//

let busket;
const addToBag = (x) => {
  let items = JSON.parse(x.dataset.itemobj);
  busket.push(items);
  localStorage.setItem("busket", JSON.stringify(busket));
  count();
};
let count = () => {
  document.getElementById("cartItem").innerText = busket.length;
};

let favorite;
const addToLove = (x) => {
  let loveData = JSON.parse(x.dataset.heartdata);
  favorite.push(loveData);
  localStorage.setItem("favorite", JSON.stringify(favorite));
  heartCount();
};
const heartCount = () => {
  document.getElementById("heartItem").innerText = favorite.length;
};
