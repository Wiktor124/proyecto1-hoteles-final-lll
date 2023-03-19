export function createBanner(route, text) {
  const bannerDiv = document.createElement('div')
  bannerDiv.classList.add('banner')

  const bannerTitle = document.createElement('h1')
  bannerTitle.classList.add('banner-title')

  bannerDiv.append(bannerTitle)

  const body = document.body
  body.insertBefore(bannerDiv, body.children[1])

  const banner = document.querySelector('.banner')
  banner.style.background = `url(${route}) center no-repeat`
  banner.style.backgroundSize = 'cover'

  document.querySelector('.banner-title').textContent = text
}

export function createGalleryCards(routeImage, itemName, routePage) {
  const template = `
    <a href="${routePage}">
      <div class="gallery__textCard--color">
        <span class="gallery__countryText">Costa Rica</span>
        <h4 class="gallery__titleCard">${itemName}</h4>
      </div>

      <img class="gallery__arrow" src="./public/assets/icons/arrow-card.png" />
    </a>
  `

  const galleryLi = document.createElement('li')
  galleryLi.style.background = `url(${routeImage})`
  galleryLi.style.backgroundSize = 'cover'
  galleryLi.classList.add('gallery__list') // add class
  galleryLi.innerHTML = template


  return galleryLi.outerHTML

}


