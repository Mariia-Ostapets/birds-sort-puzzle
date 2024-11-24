document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-burger-btn');
  const closeBtn = document.querySelector('.header-close-btn');
  const backdrop = document.querySelector('.header-burger-backdrop');
  const menu = document.querySelector('.header-burger-menu');

  burgerBtn.addEventListener('click', () => {
    backdrop.style.display = 'block';
    setTimeout(() => {
      backdrop.classList.add('is-visible');
      menu.classList.add('is-open-header');
    }, 10);
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open-header');
    backdrop.classList.remove('is-visible');
    setTimeout(() => {
      backdrop.style.display = 'none';
    }, 300);
  });
});
