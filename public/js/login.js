const bgChosen = document.querySelector('.background-chosen')
const bgInput = document.querySelector('.bg-input')

const picChosen = document.querySelector('.picture-chosen')
const picInput = document.querySelector('.picture-input')

bgInput.addEventListener('input', (evt) => {
  if (bgInput.value !== '') {
    bgChosen.classList.add('image-added')
    // pokeImg.style.backgroundImage = `url(${pokeImgInput.value})`
    bgChosen.style.backgroundImage = `url(${bgInput.value})`
  } else {
    bgChosen.style.backgroundImage = ''
    if (picInput.value === '') {
      bgChosen.classList.remove('image-added')
    }
  }
})

picInput.addEventListener('input', (evt) => {
  if (picInput.value !== '') {
    bgChosen.classList.add('image-added')
    picChosen.classList.add('image-added')
    // pokeImg.style.backgroundImage = `url(${pokeImgInput.value})`
    picChosen.style.backgroundImage = `url(${picInput.value})`
  } else {
    picChosen.style.backgroundImage = 'url()'
    picChosen.classList.remove('image-added')
    if (bgInput.value === '') {
      bgChosen.classList.remove('image-added')
    }
  }
})

const firstName = document.querySelector('.full-name')
const createAccount = document.querySelector('.create')

firstName.addEventListener('keyup', (evt) => {
  document.querySelector('.name').innerText = `${firstName.value}`

  createAccount.setAttribute('value', `Create ${firstName.value}'s Account`)
})
