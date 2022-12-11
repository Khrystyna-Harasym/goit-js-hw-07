import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')



const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  ""
);

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
   
    evt.preventDefault();
    
    if (!evt.target.nodeName === 'IMG') {
        return;
    }
    console.log(evt.target);
   
    const instance = basicLightbox.create( `
	<img src ="${evt.target.dataset.source}">`);
    instance.show();
};

gallery.addEventListener('keydown', onCloseModal)
    
    function onCloseModal(evt) {
    if (evt.key === "Escape") {
        instance.close();
    }
};



