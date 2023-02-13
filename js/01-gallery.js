import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryCards(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onImageClick);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join("");
}

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  const onCloseModal = (event) => {
    const ESC_KEY = "Escape";

    if (event.code === ESC_KEY) {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onCloseModal);
      },

      onclose: (instance) => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  instance.show();
}

console.log(galleryItems);
