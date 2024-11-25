// document.addEventListener('DOMContentLoaded', () => {
//   const burgerBtn = document.querySelector('.header-burger-btn');
//   const closeBtn = document.querySelector('.header-close-btn');
//   const backdrop = document.querySelector('.header-burger-backdrop');
//   const menu = document.querySelector('.header-burger-menu');

//   burgerBtn.addEventListener('click', () => {
//     backdrop.style.display = 'block';
//     setTimeout(() => {
//       backdrop.classList.add('is-visible');
//       menu.classList.add('is-open-header');
//     }, 10);
//   });

//   closeBtn.addEventListener('click', () => {
//     menu.classList.remove('is-open-header');
//     backdrop.classList.remove('is-visible');
//     setTimeout(() => {
//       backdrop.style.display = 'none';
//     }, 300);
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-burger-btn');
  const closeBtn = document.querySelector('.header-close-btn');
  const backdrop = document.querySelector('.header-burger-backdrop');
  const menu = document.querySelector('.header-burger-menu');
  const menuLinks = document.querySelectorAll('.header-burger-list-item-link'); // Усі посилання в меню

  // Відкрити меню
  burgerBtn.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'; // Заборонити скрол сторінки
    backdrop.style.display = 'block';
    setTimeout(() => {
      backdrop.classList.add('is-visible');
      menu.classList.add('is-open-header');
    }, 10);
  });

  // Закрити меню
  closeBtn.addEventListener('click', closeMenu);

  // Закриття при кліку на посилання
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Закриття при кліку на бекдроп
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      // Перевіряємо, що клік саме на бекдропі
      closeMenu();
    }
  });

  // Функція закриття меню
  function closeMenu() {
    menu.classList.remove('is-open-header');
    backdrop.classList.remove('is-visible');
    setTimeout(() => {
      backdrop.style.display = 'none';
    }, 300);
  }
});
