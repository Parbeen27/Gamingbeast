
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider');
  const images = slider.querySelectorAll('img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  let autoSlide;

  function showSlide(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    slider.style.transform = `translateX(-${index * 100}vw)`;
    currentIndex = index;
  }

  function nextSlide() { showSlide(currentIndex + 1); }
  function prevSlide() { showSlide(currentIndex - 1); }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

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

// ...existing code...
