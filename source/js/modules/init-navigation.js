const initNavigation = () => {

  let navLinks = document.querySelectorAll('.main-nav__link');
  navLinks.forEach(() => {
    navLinks[0].classList.add('is-active');
  });
};

export {initNavigation};
