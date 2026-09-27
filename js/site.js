const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

const galleryImages = [...document.querySelectorAll('.gallery-image')];
const galleryIndex = document.querySelector('#gallery-index');
let galleryPosition = 0;

function showGalleryImage(nextPosition) {
  if (!galleryImages.length) return;
  galleryPosition = (nextPosition + galleryImages.length) % galleryImages.length;
  galleryImages.forEach((image, index) => {
    image.classList.toggle('is-active', index === galleryPosition);
  });
  if (galleryIndex) {
    galleryIndex.textContent = String(galleryPosition + 1).padStart(2, '0');
  }
}

document.querySelectorAll('[data-gallery-direction]').forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.galleryDirection === 'next' ? 1 : -1;
    showGalleryImage(galleryPosition + direction);
  });
});

const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();
