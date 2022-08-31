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
};

const lightboxSlider = new SimpleLightbox('.gallery a ', {
    sourceAttr: 'href',
    captions: true,
    captionsData: 'title',
    captionPosition: 'bottom',
    captionDelay: 250,
    loop: true,
    overlayOpacity: 0.6,
    close: false,
    animationSpeed: 250,
});