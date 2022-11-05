const avatarContainer = document.querySelector('.avatar-container')
const avatarInput = document.querySelector('.avatar-input')

avatarInput.addEventListener('input', (evt) => {
  if (avatarInput.value !== '') {
    avatarContainer.classList.add('image-added')
    avatarContainer.style.backgroundImage = `url(${avatarInput.value})`
  } else {
    avatarContainer.classList.remove('image-added')
  }
})
