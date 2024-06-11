const categoriesButtons = document.querySelectorAll('.b-categories-buttons__category-button');
const carsCard = document.querySelectorAll('.b-cars-cards__category');

categoriesButtons.forEach(function(button) {
  button.addEventListener('click', open);
});

function open(event) {
  const buttonTarget = event.currentTarget;
  const button = buttonTarget.dataset.button;

  categoriesButtons.forEach(function(button) {
    button.classList.remove('b-categories-buttons__category-button_active');
  });

  buttonTarget.classList.add('b-categories-buttons__category-button_active')

  carsCard.forEach(function(card) {
    card.classList.remove('b-cars-cards__category_active')
  })

  document.querySelector(`#${button}`).classList.add('b-cars-cards__category_active');
};

const burger = document.querySelector('.burger');
const menuButtons = document.querySelector('.b-menu-buttons-list');

burger.addEventListener('click', () => {
  menuButtons.classList.toggle('b-menu-buttons-list_active');
})

const swiper = new Swiper(".swiper", {
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
});