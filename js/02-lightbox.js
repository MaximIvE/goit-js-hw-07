import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");


function createEl(src, data, alt){
    return `<div class="gallery__item">
    <a class="gallery__link" href="${data}">
      <img
        class="gallery__image"
        src="${src}"
        data-source="${data}"
        alt="${alt}"
      />
    </a>
  </div>`
};

const galleryString = galleryItems.reduce((contanier, galleryItem) => {
  const {preview, original, description} = galleryItem;
  
  contanier = contanier + createEl(preview, original, description);
  return contanier;
}, "");

galleryEl.insertAdjacentHTML("beforeend", galleryString);


