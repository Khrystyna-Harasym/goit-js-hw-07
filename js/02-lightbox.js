import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(createGalleryImages(galleryItems));

const gallery = document.querySelector(".gallery");
const imagesMarkup = createGalleryImages(galleryItems);
gallery.insertAdjacentHTML('beforeend', imagesMarkup)

function createGalleryImages(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        `;
  }).join('');
    
}
gallery.addEventListener("click", onClick)

function onClick(evt) {
    evt.preventDefault();
    if (!evt.target === 'IMG') {
        return;
    }
};

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});