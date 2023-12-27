window.addEventListener("load", () => {
  let bagItemsstr = localStorage.getItem("busket");
  busket = bagItemsstr ? JSON.parse(bagItemsstr) : [];

  let loveItemstr = localStorage.getItem("favorite");
  favorite = loveItemstr ? JSON.parse(loveItemstr) : [];
  count();
  heartCount();
});

const id = localStorage.getItem("singleProduct");

const fetchData = async () => {
  const response = await fetch("/db/data.js");
  const data = await response.json();
  singleData(data.products);
};
fetchData();

const singleData = (data) => {
  data.filter((item) => {
    if (item.id == id) {
      getSingleData(item);
    }
  });
};

const getSingleData = (data) => {
  const singleproduct = document.getElementById("singleproduct");
  singleproduct.innerHTML = interface(data);
};

const interface = (x) => {
  return `
    <div id="grid2-item">
    <img class="singleimage" src=${x.image} />
    <div id="multiple-images">
      <img src="/assets/images/products/bmw1.png" alt="" />
      <img src="/assets/images/products/bmw1.png" alt="" />
      <img src="/assets/images/products/bmw1.png" alt="" />
      <img src="/assets/images/products/bmw1.png" alt="" />
    </div>
  </div>
  <div id="grid2-item">
    <a href="/">Home /</a>
    <h1>${x.title}</h1>
    <h4>${x.discountPrice},00</h4>
    <div class="size">
      <span class="size-btn">S</span>
      <span class="size-btn">M</span>
    </div>
    <div id="buttons">
      <button class="bag add-cart-btn" onclick='addBag(this)' data-itemobj='${JSON.stringify(
        x
      )}'>ADD TO BAG</button>
      <button class="bag add-cart-wishlist">ADD TO WISHLIST</button>
    </div>
  </div>
    `;
};

const addBag = (x) => {
  let items = JSON.parse(x.dataset.itemobj);
  busket.push(items);
  localStorage.setItem("busket", JSON.stringify(busket));
  count();
};
