const posterContainer = document.querySelector('.poster-container')
const posterInput = document.querySelector('.poster-input')
const pContainers = document.querySelectorAll('.poster-container div')

posterInput.addEventListener('input', (evt) => {
  if (posterInput.value !== '') {
    posterContainer.classList.add('image-added')
    // pokeImg.style.backgroundImage = `url(${pokeImgInput.value})`
    // posterContainer.style.backgroundImage = `url(${posterInput.value})`
    pContainers.forEach(element => {
      element.style.backgroundImage = `url(${posterInput.value})`
    })
  } else {
    posterContainer.classList.remove('image-added')
    pContainers.forEach(element => {
      element.style.backgroundImage = 'url()'
    })
  }
})

const mediaTitle = document.querySelector('.media-title')
const mediaSubmit = document.querySelector('.media-submit')

mediaTitle.addEventListener('keyup', (evt) => {
  mediaSubmit.setAttribute('value', `Add ${mediaTitle.value}`)
})

// const pContainers = document.querySelectorAll('.poster-container div')

// pContainers.forEach(element => {
//   element.style.backgroundImage = 'url(https://pbs.twimg.com/media/Fgz5yfUWIAAxRhy?format=jpg&name=small)'
// });
