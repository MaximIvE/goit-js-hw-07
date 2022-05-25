import { galleryItems } from './gallery-items.js';

// #1 Додаємо до галереї розмітку картинок
const galleryEl = document.querySelector(".gallery");

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

galleryEl.insertAdjacentHTML("beforeend", collection);

// #2 Створюємо слухача події клік та робимо делегування з фільтром

const imageEl = document.querySelector(".gallery__image");

galleryEl.addEventListener('click', e => {
    e.preventDefault();
    const currentItem = e.target;
    if (currentItem.className !== "gallery__image"){
        return;
    };

    viewPicture(currentItem);
});

function viewPicture(image){
    console.log("Спрацювала функція viewPicture");
    console.log(image);
};



