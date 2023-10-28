// Shery.mouseFollower();
let bagItemsstr = localStorage.getItem("bagItems");
let bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];


const getData = () => {
  let bagData = bagItems
    .map((x) => {
      return `
        <div class="cartItems">
          <i class='bx bx-x' onclick="removeFromBag(${x.id})"></i>
          <img
            src="${x.image}"
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
  if (!boxitems) return;
  boxitems.innerHTML = bagData;
};
getData();

const removeFromBag = (id) => {
  bagItems = bagItems.filter((i) => id != i.id);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  getData();
  checkout();
};

const checkout = () => {
  const bagsummerry = document.getElementById("checkout");

  let totalMrp = 0;
  console.log(totalMrp);
  let discouMrp = 0;
  let disCpn = 0;
  let convinceMrp = 82;
  let sumOf = 0;

  bagItems.map((x) => {
    let number = Number(x.discountPrice.replace("₹", ""));
    totalMrp += number;
    discouMrp = Math.floor(totalMrp / 9);
    disCpn = Math.floor(discouMrp / 2);

    sumOf = totalMrp - discouMrp - disCpn - convinceMrp;
  });

  bagsummerry.innerHTML = `
        <div class="checkoutItem">
          <h6>PRICE DETAILS ( ${bagItems.length} Items)</h6>
          <br>
          <div class="zx00p">
            <div class="mlkk99 looos0">
              <p class="itmCount">Total MRP</p>
              <p class="totalMrp">Discount on MRP</p>
              <p class="coupon">Extra Discount</p>
              <p class="convince">Convince Fee</p>
            </div>
            <div class="mlkk99 olss">
              <p class="pr">₹${totalMrp}</p>
              <p class="pr rpr">-₹${discouMrp}</p>
              <p class="applycoupon" id="discountCpn">-${disCpn}</p>
              <p class="pr">₹${convinceMrp}</p>
            </div>
          </div>
          <hr />
          <div class="totalAmount">
            <h4>Total Amount</h1>
              <span>₹${sumOf}</span>
          </div>
          <a href="" class="button">place order</a>
        </div>`;
};
checkout();
