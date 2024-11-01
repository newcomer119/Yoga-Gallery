// Select DOM elements
const header = document.querySelector('.logo');
const logoImg = header.querySelector('img');
const heading = header.querySelector('h1');

// Logo click handler - returns to homepage
logoImg.addEventListener('click', () => {
    window.location.href = '/';
});

// Optional: Hide/Show header text on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove class when scrolling down/up
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down - optionally hide the heading
        heading.style.opacity = '0';
    } else {
        // Scrolling up - show the heading
        heading.style.opacity = '1';
    }
    
    lastScroll = currentScroll;
});

// Optional: Responsive text handling
function updateHeaderText() {
    if (window.innerWidth < 768) {
        // For mobile screens, you might want to show only the logo
        heading.style.display = 'none';
    } else {
        heading.style.display = 'block';
    }
}

// Listen for window resize
window.addEventListener('resize', updateHeaderText);

// Initial call
updateHeaderText();