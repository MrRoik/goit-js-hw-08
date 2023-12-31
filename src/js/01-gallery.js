// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", createMarcup(galleryItems));

function createMarcup(array) {
    return array.map(({ preview, original, description }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href = "${original}" >
                    <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                </a>
            </li >`)
        .join("");
}

//  юзаєм бібліотеку SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt', captionDelay: 250
});
