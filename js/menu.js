// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleModal);
//   refs.closeMenuBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.menu.classList.toggle('is-open');
//   }
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // console.log("Button clicked");
    // console.log(refs.menu.classList);
    refs.menu.classList.toggle('menu-mobile_is-hidden');
  }
})();