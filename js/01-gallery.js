import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryBoxRef = document.querySelector(".gallery");
const galleryMarkup = renderGalleryMarkup(galleryItems);
galleryBoxRef.insertAdjacentHTML('beforeend', galleryMarkup);

function renderGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}" />
     </a>
</div>`).join('');
};

galleryBoxRef.addEventListener('click', onOpenBigPicture);

function onOpenBigPicture(e) {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

    instance.show();

    galleryBoxRef.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
};

