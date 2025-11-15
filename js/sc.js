
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider');
  const images = slider.querySelectorAll('img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const sliderContainer = document.querySelector('.slider-container');
  let currentIndex = 0;
  let autoSlide;
  let touchStartX = 0;
  let touchEndX = 0;

  function showSlide(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  // Button click handlers
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  // Touch/Swipe handlers for mobile and desktop
  sliderContainer.addEventListener('touchstart', handleSwipeStart, false);
  sliderContainer.addEventListener('touchend', handleSwipeEnd, false);
  sliderContainer.addEventListener('mousedown', handleSwipeStart, false);
  sliderContainer.addEventListener('mouseup', handleSwipeEnd, false);

  function handleSwipeStart(e) {
    touchStartX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  }

  function handleSwipeEnd(e) {
    touchEndX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeThreshold = 50; // minimum swipe distance in pixels
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - show next slide
        nextSlide();
      } else {
        // Swiped right - show previous slide
        prevSlide();
      }
      resetAutoSlide();
    }
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3500);
  }
  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  showSlide(0);
  startAutoSlide();
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-box');
  const searchInput = searchForm.querySelector('input[type="text"]');
  const showSearchCheckbox = document.getElementById('show-search');

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchQuery = searchInput.value.trim();

    if (searchQuery) {
      // You can implement search functionality here
      // For now, we'll show an alert with the search query
      alert(`Searching for: "${searchQuery}"\n\nSearch functionality to be integrated with your game database.`);
      
      // Clear the search input
      searchInput.value = '';
      
      // Close the search bar
      showSearchCheckbox.checked = false;
    }
  });

  // Optional: Allow Escape key to close search
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      showSearchCheckbox.checked = false;
    }
  });
});
