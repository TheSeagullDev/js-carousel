import "./styles.css";

const images = document.querySelectorAll("img");
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

const nextBtn = document.createElement("button");
const lastBtn = document.createElement("button");
const body = document.querySelector("body");
nextBtn.textContent = "Next";
nextBtn.addEventListener("click", () => next(images));
body.appendChild(nextBtn);

lastBtn.textContent = "Last";
lastBtn.addEventListener("click", () => last(images));
body.appendChild(lastBtn);

goTo(images, 0);

setInterval(() => next(images), 5000);
