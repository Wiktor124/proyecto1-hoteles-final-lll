export function heroImage(url, text) {
  const banner = document.getElementById('banner')
  banner.style.background = `url(${url}) center no-repeat`
  banner.style.backgroundSize = 'cover'

  document.getElementById('banner-title').textContent = text;
}
