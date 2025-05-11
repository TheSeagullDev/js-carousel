import "./styles.css";

const images = document.querySelectorAll(".image-container");
let index = 0;

function hideAll(imagesArr) {
  imagesArr.forEach((image) => {
    image.style.display = "none";
});
}

function goTo(imagesArr, index) {
  hideAll(imagesArr);
  const img = imagesArr.item(index);
  img.style.display = "block";
}

function next(imagesArr) {
  const length = images.length;
  index += 1;
  if (index >= length) {
    index = 0;
  }
  goTo(imagesArr, index);
}

function last(imagesArr) {
  const length = images.length;
  index -= 1;
  if (index < 0) {
    index = length - 1;
  }
  goTo(imagesArr, index);
}

function createCircles(imagesArr, buttons) {
  for(let image = 0; image < imagesArr.length; image++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("click", () => goTo(imagesArr, image));
    buttons.appendChild(circle);
  }
}

const buttons = document.querySelector(".buttons");
const nextBtn = document.querySelector(".next")
const lastBtn = document.querySelector(".last");
nextBtn.addEventListener("click", () => next(images));
lastBtn.addEventListener("click", () => last(images));

goTo(images, 0);
createCircles(images, buttons);

setInterval(() => next(images), 5000);
