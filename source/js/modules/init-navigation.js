const initNavigation = () => {

  let navLinks = document.querySelectorAll('.main-nav__link');
  // navLinks[0].classList.add('is-active');
  navLinks.forEach((item) => {
    // navLinks[0].classList.add('is-active');

    item.addEventListener('click', () => {
      navLinks[0].classList.remove('is-active');
      // if (item.classList.contains('is-active')) {
      //   item.classList.remove('is-active');
      // } else {
      //   item.classList.add('is-active');
      // }
      item.classList.add('is-active');
      // navLinks[0].classList.remove('is-active');
    });
  });
};

export {initNavigation};
