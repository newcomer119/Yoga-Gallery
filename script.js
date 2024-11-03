// Select DOM elements
const header = document.querySelector('.logo');
const logoImg = header.querySelector('img');
const heading = header.querySelector('h1');
console.log("Hello")

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

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const authButtons = document.querySelector('.auth-buttons');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Add animation for auth buttons
    authButtons.style.opacity = '0';
    setTimeout(() => {
      authButtons.style.opacity = '1';
      authButtons.style.transform = 'translateY(0)';
    }, 100);
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    // Reset auth buttons animation
    authButtons.style.opacity = '0';
    authButtons.style.transform = 'translateY(20px)';
    menuOpen = false;
  }
});