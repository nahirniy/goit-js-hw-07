import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageContainer = document.querySelector(".gallery");

let idCounter = 0;
const markup = galleryItems.map(
    ({ preview: smallImage, original: bigImage, description }) =>
        `<li data-id="${(idCounter += 1)}" class="gallery__item js-item"><img class="gallery__image js-image" src="${smallImage}" alt="${description}" /></li>`
);
imageContainer.insertAdjacentHTML("beforeend", markup.join(""));

function onClick(e) {
    const targetImage = e.target;
    if (!targetImage.classList.contains("js-image")) {
        return;
    }

    const imageId = targetImage.closest(".js-item").dataset.id;
    console.log(imageId);
}

imageContainer.addEventListener("click", onClick);
