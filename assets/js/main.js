window.addEventListener("load", () => {
  fetchApi();
  let bagItemsstr = localStorage.getItem("bagItems");
  bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];

  let singelProductBoxstr = localStorage.getItem("singelProductBox");
  singelProductBox = singelProductBoxstr ? JSON.parse(singelProductBoxstr) : [];

  let heartItemBoxstr = localStorage.getItem("heartItem");
  heartItem = heartItemBoxstr ? JSON.parse(heartItemBoxstr) : [];

  bagCount();
  heartCount();
});

//
//=============== FETCH API
//

const fetchApi = async () => {
  const response = await fetch(`/assets/js/product.json`);
  const data = await response.json();
  const { productMinimal, showcase, newproducts, category } = data;

  //
  // ========== FIRST DATA
  //
  const firstItem = productMinimal.map((x) => {
    return x;
  });
  productMinimalITEM(firstItem);

  //
  // ============== SECOND DATA
  //

  const secondItem = showcase.map((x) => {
    return x;
  });
  dealOfTheDay(secondItem);

  //
  // ============ THIRD DATA
  //

  const thirdItem = newproducts.map((x) => {
    return x;
  });
  newProducts(thirdItem);

  //
  // ============ CETAGORIES
  //

  const cetagories = category.map((x) => {
    return x;
  });
  cetagorieData(cetagories);
};

//
// =============== FIRST DATA
//

const productMinimalITEM = (heading) => {
  const data = heading
    .map((x) => {
      const { heading, product } = x;
      return headingData(heading, product);
    })
    .join(" ");

  const productMinimaContainer = document.querySelector(".product-minimal");
  if (!productMinimaContainer) return;
  productMinimaContainer.innerHTML = data;
};

const headingData = (heading, product) => {
  return `
        <div class="product-showcase">
            <h2 class="title">${heading}</h2>

            <div class="showcase-wrapper has-scrollbar">
                ${productItems(product)}
            </div>
        </div>
    `;
};

const productItems = (x) => {
  return x
    .map((x) => {
      return `
                <div class="showcase-container">
                    <div class="showcase">
                        <a href="/assets/pages/product.html" class="showcase-img-box" onclick="singelProduct(this)" data-singleobj='${JSON.stringify(
                          x
                        )}'>
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
    })
    .join(" ");
};

let singelProductBox;
const singelProduct = (item) => {
  const data = JSON.parse(item.dataset.singleobj);
  singelProductBox.push(data);
  localStorage.setItem("singelProductBox", JSON.stringify(singelProductBox));
};

//
// ===========SECOND DATA
//

const dealOfTheDay = (item) => {
  const dealOfTheDay = document.getElementById("dealOfTheDay");
  if (!dealOfTheDay) return;
  let data = item
    .map((x) => {
      return dealOfTheDayHTML(x);
    })
    .join(" ");
  dealOfTheDay.innerHTML = data;
};
const dealOfTheDayHTML = (x) => {
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

                      <button class="add-cart-btn" onclick="addToBag(this)" data-songobj='${JSON.stringify(
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
};

//
// ===========THIRD DATA
//

const newProducts = (item) => {
  const newProduct = document.getElementById("newProduct");
  if (!newProduct) return;
  let data = item
    .map((x) => {
      return newProductHTML(x);
    })
    .join(" ");
  newProduct.innerHTML = data;
};
const newProductHTML = (x) => {
  return `
                <div class="showcase">
                  <div class="showcase-banner">
                    <img
                      src="${x.image1}"
                      alt="${x.title}"
                      width="300"
                      class="product-img default"
                    />
                    <img
                      src="${x.image}"
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

                      <button class="btn-action" onclick="addToBag(this)" data-songobj='${JSON.stringify(
                        x
                      )}'>
                        <ion-icon name="bag-add-outline"></ion-icon>
                      </button>
                    </div>
                  </div>

                  <div class="showcase-content">
                    <a href="#" class="showcase-category">${x.category}</a>

                    <a href="#">
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
};

// ============= CATEGORY
const cetagorieData = (items) => {
  const cetagiriesBox = document.getElementById("cetagiriesBox");
  const data = items
    .map((x) => {
      return cetagiriesHTML(x);
    })
    .join(" ");

    cetagiriesBox.innerHTML = data;
};

const cetagiriesHTML = (items) => {
  return `

  <li class="sidebar-menu-category">
  <button class="sidebar-accordion-menu" data-accordion-btn>
    <div class="menu-title-flex">
      <img
        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/377766/04/sv01/fnd/IND/fmt/png/MB.02-Lo-Unisex-Basketball-Shoes"
        alt="footwear"
        class="menu-title-img"
        width="20"
        height="20"
      />

      <p class="menu-title">${items.heading}</p>
    </div>

    <div>
      <ion-icon name="add-outline" class="add-icon"></ion-icon>
      <ion-icon
        name="remove-outline"
        class="remove-icon"
      ></ion-icon>
    </div>
  </button>

  <ul class="sidebar-submenu-category-list" data-accordion>
    <li class="sidebar-submenu-category">
      <a href="#" class="sidebar-submenu-title">
        <p class="product-name">Sports</p>
        <data value="45" class="stock" title="Available Stock"
          >45</data
        >
      </a>
    </li>
  </ul>
</li>

  
  `;
};

//
// ==================== ADD TO BAG
//
let bagItems;
const addToBag = (itemId) => {
  let addItem = JSON.parse(itemId.dataset.songobj);
  bagItems.push(addItem);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  bagCount();
};

const bagCount = () => {
  const cartItem = document.getElementById("cartItem");
  if (!cartItem) return;
  cartItem.innerHTML = bagItems.length;
};

// =========== ADD TO HEARTS

let heartItem;
const addToLove = (item) => {
  let data = JSON.parse(item.dataset.heartdata);
  heartItem.push(data);
  localStorage.setItem("heartItem", JSON.stringify(heartItem));
  heartCount();
};

const heartCount = () => {
  document.getElementById("heartItem").innerHTML = heartItem.length;
};
