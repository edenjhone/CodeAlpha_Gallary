let currentImageIndex = 0;
const images = [
    "C:\\Users\\My Pc\\Desktop\\photos\\IMG_2918.JPG", // Replace with your image paths
    "C:\\Users\\My Pc\\Desktop\\photos\\IMG_20231118_162453_181.jpg",
    "C:\\Users\\My Pc\\Desktop\\photos\\IMG_2912.JPG",
    // Add more images as needed
];

function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    currentImageIndex = images.indexOf(imageSrc);
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Wrap around if the index goes out of bounds
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    let modalImg = document.getElementById("modalImage");
    modalImg.src = images[currentImageIndex];
}
