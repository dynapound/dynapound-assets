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



let currentPage = 0;
const pages = document.querySelectorAll('.homeslide-page');

// Function to change slides
function scrollToPage(direction) {
  currentPage += direction;

  if (currentPage < 0) {
    currentPage = pages.length - 1; // Go to last slide if going back from first
  } else if (currentPage >= pages.length) {
    currentPage = 0; // Go to first slide if going forward from last
  }

  // Remove active class from all slides
  pages.forEach((page) => page.classList.remove('active'));

  // Add active class to the current slide
  pages[currentPage].classList.add('active');
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
    scrollToPage(1); // Swipe left to go forward
  } else if (touchEndX > touchStartX + 50) {
    scrollToPage(-1); // Swipe right to go back
  }
}

    // Set the current year in the footer if needed
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
