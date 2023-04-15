function App() { }
window.onload = function (event) {
  var app = new App();
  window.app = app;
}
App.prototype.processingButton = function (event) {

  const btn = event.currentTarget;
  const carruselList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector('#track');
  const carrusel = track.querySelectorAll('.carrusel');
  const carruselWidth = carrusel[0].offsetWidth + 20;
  const trackWidth = track.offsetWidth;
  const listWidth = carruselList.offsetWidth;

  track.style.left == "" ? 
   leftPosition = track.style.left = 0 : 
   leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

  btn.dataset.button == "button-prev" ? 
  prevAction(leftPosition, carruselWidth, track) : 
  nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track)

}

const prevAction = (leftPosition, carruselWidth, track) => {
  if (leftPosition > 0) {
    track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
  } else {
    track.style.left = 0;
  }
}

const nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
  if ((leftPosition + listWidth) < trackWidth) {
    if ((leftPosition + listWidth + carruselWidth) >= trackWidth) {
      track.style.left = `${-1 * (trackWidth - listWidth)}px`;
    } else {
      track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
  }
}

// header button
const btn = document.getElementById('header-btn');
btn.addEventListener('click', () => {
  
  btn.classList.toggle('header__button--active')
  document.querySelector('.header__links').classList.toggle('header__links--active')
})


// tabs
function tab() {
  const tab = document.querySelectorAll(".tab");
  const tabcontent = document.querySelectorAll(".data");

  tab.forEach((i, z) => {
    tab[z].addEventListener("click", () => {
      tab.forEach((i, z) => {
        tab[z].classList.remove("active")
        tabcontent[z].classList.remove("active")
      });
      tab[z].classList.add('active')
      tabcontent[z].classList.add('active')
    })
  });

};
tab()

// modal sign in 

const open = document.getElementById('open')
const modal = document.getElementById('modal_container')
const close = document.getElementById('close')
const scroll = document.querySelector('body')



open.addEventListener('click', ()=>{
  btn.classList.toggle('header__button--active')
  document.querySelector('.header__links').classList.toggle('header__links--active')
  
  modal.classList.add('show');
  scroll.classList.add('scroll-body');
});

close.addEventListener('click',()=>{
  modal.classList.remove('show');
  scroll.classList.remove('scroll-body');
});