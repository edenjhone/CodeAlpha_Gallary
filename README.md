<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Image Gallery</title>
</head>

<body>
    <!-- Heading Name -->
    <div class="heading">
        <h1>Image Gallery</h1>
    </div>

    <!-- Image Gallery section all images in one div -->
    <div class="gallery">
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\IMG_2918.JPG"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\IMG_2918.JPG')"
                alt="Image 1">
        </div>
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\IMG_20231118_162453_181.jpg"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\IMG_20231118_162453_181.jpg')"
                alt="Image 2">
        </div>
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\IMG_2912.JPG"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\IMG_2912.JPG')"
                alt="Image 3">
        </div>
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\FW9A2618.JPG.jpg"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\FW9A2618.JPG.jpg')"
                alt="Image 4">
        </div>
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\IMG_20240714_114445_988.jpg"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\IMG_20240714_114445_988.jpg')"
                alt="Image 5">
        </div>
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\IMG_20240714_114448_935.jpg"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\IMG_20240714_114448_935.jpg')"
                alt="Image 6">
        </div>
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\IMG_20230524_234846_961.jpg"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\IMG_20230524_234846_961.jpg')"
                alt="Image 7">
        </div>
        <div class="gallery-item">
            <img src=
            "C:\Users\My Pc\Desktop\photos\1698137505907.JPG"
                onclick="openModal(
'C:\\Users\\My Pc\\Desktop\\photos\\1698137505907.JPG')"
                alt="Image 8">
        </div>
    </div>

    <!-- Modal for Image Display -->
    <div id="myModal" class="modal">
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImage">
    </div>
    <div id="myModal" class="modal">
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImage">
        <a class="prev" onclick="changeImage(-1)">&#10094;</a>
        <a class="next" onclick="changeImage(1)">&#10095;</a>
    </div>
    

    <!-- JavaScript for Modal -->
    <script>
        function openModal(src) {
            document.getElementById("modalImage").src = src;
            document.getElementById("myModal").style.display = "block";
        }

        function closeModal() {
            document.getElementById("myModal").style.display = "none";
        }
    </script>
</body>

</html>

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
    padding: 20px;
}

.gallery-item {
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 90%;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}


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
