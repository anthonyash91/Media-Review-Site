const bgChosen = document.querySelector('.background-chosen')
const bgInput = document.querySelector('.bg-input')

bgInput.addEventListener('input', (evt) => {
  if (bgInput.value !== '') {
    bgChosen.classList.add('image-added')
    // pokeImg.style.backgroundImage = `url(${pokeImgInput.value})`
    bgChosen.style.backgroundImage = `url(${bgInput.value})`
  } else {
    bgChosen.classList.remove('image-added')
  }
})

const picChosen = document.querySelector('.picture-chosen')
const picInput = document.querySelector('.picture-input')

picInput.addEventListener('input', (evt) => {
  if (picInput.value !== '') {
    picChosen.classList.add('image-added')
    // pokeImg.style.backgroundImage = `url(${pokeImgInput.value})`
    picChosen.style.backgroundImage = `url(${picInput.value})`
  } else {
    bgChpicChosenosen.classList.remove('image-added')
  }
})
