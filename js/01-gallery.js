import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let instanceModal = null;
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGaleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onImgClick);

function createGaleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
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
    }).join('');
}

function onImgClick(evt) {
    evt.preventDefault();   
    
    if (evt.target.nodeName !== 'IMG') {
    return;
    }

    initialModal();
    setModalImage(evt.target.dataset.source);
    instanceModal.show();
};

function initialModal() {
    instanceModal = basicLightbox.create(`
    <img src="" width="800" height="600">
    `, {
        onShow: instance => {
          document.addEventListener('keydown', onEscape);
        },
        onClose: instance => {
          document.removeEventListener('keydown', onEscape);
        },
    });
    return instanceModal;
};

function setModalImage(link) {
    const  insideModal = instanceModal.element();
    insideModal.querySelector('img').setAttribute('src', `${link}`);
};

function onEscape(evt) {
    if (evt.code === 'Escape') {
    instanceModal.close();
   }
};



