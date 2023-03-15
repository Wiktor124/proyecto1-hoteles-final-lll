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
      <div>
        <span>Costa Rica</span>
        <h4>${itemName}</h4>
      </div>

      <img src="" />
    </a>
  `

  const galleryLi = document.createElement('li')
  galleryLi.style.background = `url(${routeImage})`
  //galleryLi.classList.add('') // add class
  galleryLi.innerHTML = template


  return galleryLi.outerHTML

}


