import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");


function createEl(src, href, alt){
    return `<a class="gallery__item" href="${href}">
    <img class="gallery__image" src="${src}" alt="${alt}" />
  </a>`

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