// Toggle Mobile Menu
function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('open');
  }


function copyCode(button) {
  const codeElement = button.closest('.mac-code-box').querySelector('code').innerText;
  navigator.clipboard.writeText(codeElement).then(() => {
    button.innerText = 'Copied!';
    setTimeout(() => {
      button.innerText = 'Copy Code';
    }, 1500);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.homeslide-page');

// Function to Change Slides
function scrollToSlide(direction) {
  slides[currentSlide].classList.remove('active');

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Wrap to last slide
  } else if (currentSlide >= slides.length) {
    currentSlide = 0; // Wrap to first slide
  }

  slides[currentSlide].classList.add('active');
}

// Swipe Gesture Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.homeslide-wrapper').addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

document.querySelector('.homeslide-wrapper').addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    scrollToSlide(1); // Swipe left (next slide)
  } else if (touchEndX > touchStartX + 50) {
    scrollToSlide(-1); // Swipe right (previous slide)
  }
}

// Optional: Auto-Switch Slides
setInterval(() => {
  scrollToSlide(1);
}, 5000); // Change every 5 seconds







// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.homescroll-002-reveal-item');

  // Function to check and add the 'active' class
  const revealOnScroll = () => {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        item.classList.add('active');
      }
    });
  };

  // Add the 'active' class when scrolled into view
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check in case items are already in view
  revealOnScroll();
});





document.addEventListener("DOMContentLoaded", () => {
  const socialIcons = document.querySelectorAll(".social-icon");

  socialIcons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
      const platform = icon.getAttribute("data-platform");
      console.log(`Hovered over: ${platform}`);
    });

    icon.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Redirecting to ${icon.getAttribute("data-platform")}`);
    });
  });
});
