const inputs = document.querySelectorAll('.tag-input')

inputs.forEach(input => {
  input.addEventListener('keypress', (evt) => {
    const words = input.value.split(/\s+/)
    const numWords = words.length
    const maxWords = 1

    if (numWords > maxWords) {
      evt.preventDefault()
    }
  })
})

function changeCss () {
  const navElement = document.querySelector('#navigation')
  this.scrollY > 320 ? navElement.style.backgroundColor = 'rgba(0,0,0,.8)' : navElement.style.backgroundColor = 'rgba(0,0,0,.4)'
}

window.addEventListener('scroll', changeCss, false)

const reviewText = document.querySelectorAll('.review-text')

reviewText.forEach(text => {
  const truncate = text.innerText.split(' ').splice(0, 15).join(' ')
  text.innerText = `${truncate}...`
})

const newPostLink = document.querySelector('.new-post-link')
const newPosts = document.querySelector('.new-posts')

newPostLink.addEventListener('click', () => {
  newPostLink.classList.toggle('active')
  newPosts.classList.toggle('show')
})
