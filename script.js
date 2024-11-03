document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });

window.addEventListener('scroll', function() {
    const gallerySection = document.getElementById('gallery');
    const rect = gallerySection.getBoundingClientRect();
    
    // Check if the gallery section is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        gallerySection.style.opacity = 1; // Make it visible
        gallerySection.classList.add('fade-in'); // Add class for animation
    }
});