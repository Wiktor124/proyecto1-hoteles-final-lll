function App() {}
window.onload = function (event) {
  var app = new App()
  window.app = app
}

function updateSlide(slide, widthcard) {
  document.querySelector(
    '.carousel__trackList',
  ).style.transform = `translateX(-${slide * widthcard}px)`
}

let currentSlide = 0
App.prototype.processingButton = function (event) {
  const trackWidth = window.innerWidth
  const btn = event.currentTarget
  const carrusel = track.querySelectorAll('.carousel__card')
  const widthcard = carrusel[0].clientWidth + 20

  if (btn.dataset.button === 'button-prev') {
    currentSlide = Math.max(currentSlide - 1, 0)
  } else {
    if (trackWidth > 960) {
      currentSlide = Math.min(currentSlide + 1, 4)
    }

    if (trackWidth > 768 && trackWidth <= 950) {
      currentSlide = Math.min(currentSlide + 1, 5)
    }

    if (trackWidth <= 768) {
      currentSlide = Math.min(currentSlide + 1, 7)
    }
  }

  updateSlide(currentSlide, widthcard)
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