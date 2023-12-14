const images = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg","img/image4.jpg"];
let currentImageIndex = 0;

function showImage(index) {
  const imageContainer = document.getElementById("current-image");
  imageContainer.src = images[index];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentImageIndex);
});
