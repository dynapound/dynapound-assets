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




/* Home Page Slide Wrapper */
.homescroll-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
}

/* Individual Slides */
.homescroll-page {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(1.1);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.homescroll-page.active {
  opacity: 1;
  transform: scale(1);
}

/* Images */
.homescroll-page img {
  max-width: 75%;
  height: auto;
  transition: transform 0.3s ease;
}

.homescroll-page img:hover {
  transform: scale(1.05);
}

/* Navigation Buttons */
.slide-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  z-index: 10;
  font-size: 24px;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.2s ease;
}

.slide-nav.left {
  left: 20px;
}

.slide-nav.right {
  right: 20px;
}

.slide-nav:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

/* Mobile Support */
@media (max-width: 768px) {
  .homescroll-page img {
    max-width: 90%;
  }

  .slide-nav {
    font-size: 20px;
    padding: 12px;
  }
}











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
