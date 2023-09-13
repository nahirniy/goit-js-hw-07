import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageContainer = document.querySelector(".gallery");
let imageModule;

// 1) create markup for HTML
const markup = galleryItems
    .map(
        ({ preview, original, description }) =>
            `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`
    )
    .join("");
imageContainer.insertAdjacentHTML("beforeend", markup);

// 2) create modal images with basicLightbox library
function onClick(e) {
    e.preventDefault();
    const targetImage = e.target;
    if (!targetImage.classList.contains("gallery__image")) {
        return;
    }
    const currentImage = targetImage.dataset.source;
    const currentImageDescription = targetImage.getAttribute("alt");

    imageModule = basicLightbox.create(
        `<img src="${currentImage}" alt="${currentImageDescription}">`
    );

    imageModule.show();
}

// 3) close modal images with escape
function onEscape(e) {
    if (e.code === "Escape") {
        imageModule.close();
    }
}

imageContainer.addEventListener("click", onClick);
imageContainer.addEventListener("keydown", onEscape);
