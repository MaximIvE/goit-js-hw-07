import { galleryItems } from './gallery-items.js';

// #1 Додаємо до галереї розмітку картинок
const galleryEl = document.querySelector(".gallery");
let instance = {};

function createEl(alt, src, data_souce){
   return `
   <div class="gallery__item">
    <a class="gallery__link" href="${data_souce}">
        <img
        class="gallery__image"
        src="${src}"
        data-source="${data_souce}"
        alt="${alt}"
        />
    </a>
    </div>`;
};

function createModal(image){
    return `<img 
    class="gallery__image" src="${image.dataset.source}"
    data-source="${image.src}"
    alt="${image.alt}"
    />`;
};

function showInstance(currentItem){
    instance = basicLightbox.create(`${createModal(currentItem)}`);
    instance.show(instance);
};

function closeInstance(e){
    if (e.code === "Escape"){
        instance.close();
    };
}

const collection = galleryItems.map((element)=>{
    const {original, preview, description} = element;
    return createEl(description, preview, original);
}).join("");

galleryEl.insertAdjacentHTML("beforeend", collection);

// #2 Створюємо слухача події клік та робимо делегування з фільтром

const imageEl = document.querySelector(".gallery__image");

galleryEl.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.className !== "gallery__image"){
        return;
    };
    showInstance(e.target);
});

// Цей слухач починає реагувати на натискання клавіш rkfdsfnehb тільки після спрацьовування події 'click'.  
galleryEl.addEventListener("keydown", e => {
    if (!instance.visible()){return};
    closeInstance(e);
});