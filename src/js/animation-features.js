document.addEventListener('DOMContentLoaded', () => {
  const featuresItems = document.querySelectorAll('.js-animation');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  featuresItems.forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
  const featuresSection = document.querySelector('#features');
  const featuresItems = document.querySelectorAll('.js-animation');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        featuresItems.forEach(item => {
          setTimeout(() => {
            item.classList.add('animate');
          }, index * 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(featuresSection);
});
