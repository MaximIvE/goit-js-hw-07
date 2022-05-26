import { galleryItems } from './gallery-items.js';
// Change code below this line

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

const galleryStringEl = galleryItems.reduce((contanier, galleryItem) => {
  const {preview, original, description} = galleryItem;
  
  contanier = contanier + createEl(preview, original, description);
  return contanier;
}, "");

galleryEl.insertAdjacentHTML("beforeend", galleryStringEl);

galleryEl.addEventListener("click", e=>{
  e.preventDefault();
  const picture = e.target;
  if(picture.className !== "gallery__image"){return};
  console.log("Клікнули по картинці");
  
})