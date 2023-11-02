let loveItemstr = localStorage.getItem("favorite");
favorite = loveItemstr ? JSON.parse(loveItemstr) : [];

const favoriteData = favorite.map((x) => {
  console.log(x);
});
