import _ from 'lodash'
const lazyLoad = {
  init () {
    window.addEventListener('scroll', _.throttle(lazyLoad.scrollEvent, 16))
	},
  scrollEvent () {
    const lazyImages = [ ...document.querySelectorAll('.lazy-image') ]
		let inAdvance = -50
		lazyImages.forEach((image) => {
      if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
        image.classList.add('loaded')
			}
    })
		let verifyClass = lazyImages.filter((item) => item.classList.contains('loaded') === false)
		if (!verifyClass.length) {
      window.removeEventListener('scroll', lazyLoad.init())
		}
  }
}

export default lazyLoad
