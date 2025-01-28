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



  // ------------------------------ Slides ----------------------------------------------------------------------------------- //

    let currentPage = 0; // Fixed variable declaration
    const pages = document.querySelectorAll('.homeslide-page');

    // Function to scroll to the next or previous page
    function scrollToPage(direction) {
      currentPage += direction;

      if (currentPage < 0) {
        currentPage = 0; // Stay on the first page
      } else if (currentPage >= pages.length) {
        currentPage = pages.length - 1; // Stay on the last page
      }

      // Scroll to the current page
      pages[currentPage].scrollIntoView({ behavior: 'smooth' });
    }

    // Function to check if the user has scrolled past the homescroll section
    function canScroll() {
      const sectionRect = document.querySelector('.homescroll-002-container').getBoundingClientRect();
      return sectionRect.bottom <= 0; // Returns true if the bottom of the section is above the viewport
    }

    // Enable scrolling to navigate between pages
    document.addEventListener('wheel', function(event) {
      if (canScroll()) { // Only allow navigation if the user has scrolled past the homescroll section
        if (event.deltaY > 0) {
          scrollToPage(1); // Scroll down
        } else {
          scrollToPage(-1); // Scroll up
        }
        event.preventDefault(); // Prevent default scrolling
      }
    });

    // Function to reveal elements on scroll
    function revealElements() {
      let elements = document.querySelectorAll('.homescroll-002-reveal-item');
      let windowHeight = window.innerHeight;
      elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    }

    // Add scroll event listener for revealing elements
    window.addEventListener('scroll', revealElements);
    revealElements();

    // Set the current year in the footer if needed
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }