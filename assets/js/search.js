const searchApi = async () => {
  const response = await fetch("/assets/js/product.json");
  const data = await response.json();
  const { newproducts } = data;
  const lists = newproducts.map((x) => {
    return `
                <li class="item-listss">
                  <a href="/">
                    <img
                      width="100px"
                      src="${x.image}"
                      alt=""
                    />
                    <div id="search-item--details">
                      <h5 id="title-name">
                        BMW M Motorsport Assembly Crewneck Men's Sweatshirt
                      </h5>
                      <p id="search-price">
                        <span class="discount-price">${x.discountPrice},00</span>
                        <span class="current-price">${x.currentPrice},00</span>
                      </p>
                    </div>
                  </a>
                </li>
    `;
  });
  document.getElementById("products").innerHTML = lists;
};
searchApi();

const search = () => {
  let searchItem = document.getElementById("search-input").value.toUpperCase();

  let product = document.querySelectorAll(".item-listss");
  let pname = document.getElementsByTagName("h5");

  console.log(pname.innerText);
  for (let i = 0; i < product.length; i++) {
    let match = product[i].getElementsByTagName("h5")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchItem) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

const headerSearchContainer = document.querySelector(
  ".header-search-container"
);
headerSearchContainer.addEventListener("click", () => {
  document.getElementById("search").style.display = "flex";
});

const closeSearch = () =>{
  document.getElementById("search").style.display = "none";
}