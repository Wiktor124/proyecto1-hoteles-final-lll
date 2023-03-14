export class CreateDomElements {
  static createBanner() {
    const bannerDiv = document.createElement('div')
    bannerDiv.classList.add('banner')

    const bannerTitle = document.createElement('h1')
    bannerTitle.classList.add('banner-title')

    bannerDiv.append(bannerTitle)

    const body = document.body
    body.insertBefore(bannerDiv, body.children[1])
  }

  static getImageAndText(route, text) {
    CreateDomElements.createBanner()

    const banner = document.querySelector('.banner')
    banner.style.background = `url(${route}) center no-repeat`
    banner.style.backgroundSize = 'cover'

    document.querySelector('.banner-title').textContent = text
  }

  static createGalleryCards(routeImage, itemName, routePage) {

    console.log(routeImage);
    
    const galleryLi = document.createElement('li')
    galleryLi.style.background = `url(${routeImage})`

    const divCard = document.createElement('div')

    const spanText = document.createElement('span')
    spanText.textContent = 'Costa Rica'
    spanText.classList.add('gallery__country')

    const title = document.createElement('h4')
    title.classList.add('gallery__titleCard')
    title.textContent = itemName

    divCard.append(spanText, title)

    const arrow = document.createElement('img')
    arrow.classList.add('gallery__arrow')
    arrow.src = ''
    arrow.classList.add()

    const link = document.createElement('a')
    link.href = routePage
    link.classList.add('gallery__link')
    link.append(divCard, arrow)

    galleryLi.appendChild(link)

    return galleryLi.outerHTML
  } 
}