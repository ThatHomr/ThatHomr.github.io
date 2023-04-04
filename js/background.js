const images = [
  "bg-dark-01.jpg",
  "bg-dark-04.jpg",
  "dist-photo-71.jpg",
  "dist-photo-72.jpg",
  "dist-photo-73.jpg",
  "dist-photo-74.jpg",
  "dist-photo-75.jpg",
];

let chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

document.body.appendChild(bgImage);
document.querySelector(
  "body"
).style.backgroundImage = `url(img/${chosenImage})`;

const next = document.querySelector("#next");
const overlay = document.querySelector("#overlay");

next.addEventListener("click", changeImg);

function changeImg(event) {
  event.preventDefault();
  chosenImage = images[Math.floor(Math.random() * images.length)];
  document.querySelector(
    "body"
  ).style.backgroundImage = `url(img/${chosenImage})`;
}
