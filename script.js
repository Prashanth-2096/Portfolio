function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function setCurrentYear() {
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
  
  window.onload = setCurrentYear;

  function trackCVDownload() {
    if (typeof gtag === 'function') {
      gtag('event', 'download_cv_click', {
        event_category: 'Engagement',
        event_label: 'Download CV Button',
      });
    } else {
      console.warn("Google Analytics is not loaded");
    }
  }