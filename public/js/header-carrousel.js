// header button
const btn = document.getElementById('header-btn');
btn.addEventListener('click', () => {
  btn.classList.toggle('header__button--active')
  document.querySelector('.header__links').classList.toggle('header__links--active')
  console.log('hola');
})

console.log('hola');