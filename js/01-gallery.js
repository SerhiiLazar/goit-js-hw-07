import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGaleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGaleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        `;
    }).join('');
}

const createLightboxInstance = (evt) => {
    

    const imgTarget = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${imgTarget}" width="800" height="600">
    `);

    instance.show(
        document.addEventListener('keydown', (evt) => {
            if (evt.key && evt.code === 'Escape') {
                instance.close()
            }
        })
    );
};
const onImgClick = (evt) => {
    if (evt.target.nodeName !== 'IMG') return;
    
    createLightboxInstance(evt);
    evt.preventDefault();  

};

gallery.addEventListener('click', onImgClick);


