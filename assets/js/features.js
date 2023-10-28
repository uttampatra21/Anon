
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
let countDown = () => {
  let futureDate = new Date("20 nov 2023");
  let currentDate = new Date();

  let presentDate = futureDate - currentDate;
  let days = Math.floor(presentDate / 1000 / 60 / 60 / 24);
  let hour = Math.floor(presentDate / 1000 / 60 / 60) % 60;
  let min = Math.floor(presentDate / 1000 / 60) % 60;
  let sec = Math.floor(presentDate / 1000) % 60;
  document.querySelectorAll("#days").innerHTML = days;
};
countDown();
setInterval(countDown, 1000);