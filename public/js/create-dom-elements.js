
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
    CreateDomElements.createBanner();
    
    const banner = document.querySelector('.banner')
    banner.style.background = `url(${route}) center no-repeat`
    banner.style.backgroundSize = 'cover'

    document.querySelector('.banner-title').textContent = text
  }

}


