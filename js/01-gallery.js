import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

// const element = galleryItems[0];

function createEl({original, preview, description}){
   return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>`;
};

const collection = galleryItems.map((element)=>{
    return createEl(element);
}).join("");

console.log(collection);
galleryEl.insertAdjacentHTML("beforeend", collection);