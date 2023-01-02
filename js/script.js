"use strict";

const advertising = document.querySelectorAll(".promo__adv img");
const genre = document.querySelector(".promo__genre");
const background = document.querySelector(".promo__bg");
const series = document.querySelector(".promo__interactive-list");
const seriesItem = document.querySelectorAll(".promo__interactive-item");

// advertising.style.display = "none";
advertising.forEach(function (item) {
  item.style.display = "none";
});

genre.textContent = "Comedy";
background.style.background =
  "url('../img/1.jpg') center center/cover no-repeat";

const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "Great Seljuks: Guardians...",
  ],
};

// series.innerHTML = "";

// for (let i = 0; i < seriesItem.length; i++) {
//   seriesItem[i].textContent = `${i + 1} ${seriesDB.series[i]}`;
// }

console.log(seriesItem);
