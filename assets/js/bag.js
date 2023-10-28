// Shery.mouseFollower();

let bagItemsstr = localStorage.getItem("bagItems");
bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];


const getData = () => {
  let bagData = bagItems
    .map((x) => {
      return `
        <div class="cartItems">
          <i class='bx bx-x' onclick="removeFromBag(${x.id})"></i>
          <img
            src="${x.image1}"
          />
          <div id="cartDetails">
            <h4>${x.title}</h4>
            <p>Women mauve watch</p>
            <small>Sold by : Vision Star</small>
            <div class="price">
              <strong>${x.discountPrice}</strong>
              <strong style="text-decoration: line-through;">${x.currentPrice}</strong>
              <p>70% off</p>
            </div>
            <small>24 days return available</small>
            <small style="display: flex; align-items: end;"><i class='bx bx-check'></i> Delivery within 4 Days</small>
          </div>
        </div>
    `;
    })
    .join(" ");

  const boxitems = document.getElementById("boxitems");
  if(!boxitems)return
  boxitems.innerHTML = bagData;
};
getData();

const removeFromBag = (id) => {
  bagItems = bagItems.filter((i) => id != i.id);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  getData();
  console.log(bagItems);
};
