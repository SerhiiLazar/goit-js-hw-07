import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGaleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGaleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
        
        `;
    }).join('');
};

const lightboxSlider = new SimpleLightbox('.gallery a ', {
    sourceAttr: 'href',
    captions: true,
    captionsData: 'alt',
    captionPosition: 'top',
    captionDelay: 250,
    captionDelay: 250,
    loop: true,
    overlayOpacity: 0.6,
    close: false,
    animationSpeed: 250,
});