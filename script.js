// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Image Carousel
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3; // Assuming 3 slides
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Lightbox Modal
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const productImages = document.querySelectorAll('.product-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentImageIndex = 0;

productImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        currentImageIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
    lightboxImg.src = productImages[currentImageIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % productImages.length;
    lightboxImg.src = productImages[currentImageIndex].src;
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
    } else if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
        lightboxImg.src = productImages[currentImageIndex].src;
    } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % productImages.length;
        lightboxImg.src = productImages[currentImageIndex].src;
    }
});