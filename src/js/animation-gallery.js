document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.js-animation'); // Елементи для анімації

  const observerOptions = {
    root: null, // Спостереження у viewport
    rootMargin: '0px',
    threshold: 0.1, // Анімація запускається, коли 10% елемента у viewport
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Додаємо клас animate
      }
    });
  }, observerOptions);

  // Додаємо всі елементи до спостереження
  galleryItems.forEach(item => observer.observe(item));
});
