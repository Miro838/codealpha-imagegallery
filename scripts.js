// Array of real image URLs from Unsplash, now with consistent size for all images
const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1725714354941-02986971c66b?crop=entropy&cs=tinysrgb&w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1654676653686-0b5e4a8ae190?crop=entropy&cs=tinysrgb&w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?crop=entropy&cs=tinysrgb&w=800&h=500&fit=crop'
];

// Current image index
let currentIndex = 0;

// Show image in the viewer with animation
function showImage(index) {
    const imageElement = document.getElementById('current-image');
    
    // Remove the 'show' class to start the transition effect
    imageElement.classList.remove('show');
    
    // Set the new image source
    setTimeout(() => {
        imageElement.src = images[index];
        imageElement.classList.add('show'); // Re-add the 'show' class for the transition effect
    }, 100); // Small delay to allow CSS transition to happen

    currentIndex = index;
}

// Show previous image
function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

// Show next image
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}
