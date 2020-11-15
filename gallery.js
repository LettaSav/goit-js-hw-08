import images from "./gallery-items.js";
const galleryCreator = document.querySelector(".js-gallery");
const createImagesList = ({ preview, description, original }) => {
  const imagesListRef = document.createElement("li");
  imagesListRef.classList.add("gallery__item");
  const imagesLinkRef = document.createElement("a");
  imagesLinkRef.classList.add("gallery__link");
  imagesLinkRef.href = original;
  const imagesRef = document.createElement("img");
  imagesRef.classList.add("gallery__image");
  imagesRef.src = preview;
  imagesRef.alt = description;
  imagesRef.dataset.source = original;
  imagesLinkRef.appendChild(imagesRef);
  imagesListRef.appendChild(imagesLinkRef);
  return imagesListRef;
};

const imagesListCard = images.map((images) => createImagesList(images));
galleryCreator.append(...imagesListCard);
const modalOverlay = document.querySelector(".lightbox__overlay");
const modalClosure = document.querySelector(".lightbox__button");
const modalSlider = document.querySelector(".lightbox__content");
const modalWindow = document.querySelector(".js-lightbox");

galleryCreator.addEventListener("click", modalOpener);
modalClosure.addEventListener("click", buttonForClosure);
modalOverlay.addEventListener("click", buttonForClosure);
window.addEventListener("keyup", buttonForClosure);
window.addEventListener("keydown", galleryNavigation);
function modalOpener(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  if (e.target.nodeName === "IMG") {
    modalWindow.classList.add("is-open");
    const modalImages = document.querySelector(".lightbox__image");
    modalImages.src = e.target.getAttribute("data-source");
    modalImages.alt = e.target.alt;
  }
}
function buttonForClosure(e) {
  e.preventDefault();
  if (
    e.target.nodeName === "BUTTON" ||
    e.target === modalOverlay ||
    e.keyCode == 27
  ) {
    modalWindow.classList.remove("is-open");
    modalImages.src = "";
    modalImages.alt = "";
  }
}
function galleryNavigation(e) {
  if (e.keyCode == 37 && images.lenght < 0) {
    modalSlider.children[i] -= 1;
    modalImages.src = e.target.getAttribute("data-source");
    modalImages.alt = e.target.alt;
  }
  if (e.keyCode == 39 && images.lenght <= images.lenght) {
    modalSlider.children[i] += 1;
    modalImages.src = e.target.getAttribute("data-source");
    modalImages.alt = e.target.alt;
  }
}
