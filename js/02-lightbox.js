import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
