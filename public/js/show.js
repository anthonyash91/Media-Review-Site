
const previewComment = document.querySelector('.preview.comment')

const avatarInput = document.querySelector('.avatar-input')
const previewIcon = document.querySelector('.preview.comment-icon')

const commentNameInput = document.querySelector('.comment-name-input')
const previewCommentName = document.querySelector('.preview-name')

const commentInput = document.querySelector('.comment-input')
const previewCommentBody = document.querySelector('.preview-comment-body')

avatarInput.addEventListener('input', (evt) => {
  previewIcon.style.backgroundImage = `url(${avatarInput.value})`
  previewComment.classList.add('show')

  if (avatarInput.value === '') {
    previewIcon.style.backgroundImage = 'url(https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png)'
  }
})

commentNameInput.addEventListener('input', (evt) => {
  if (avatarInput.value === '') {
    previewComment.classList.add('show')
    previewIcon.style.backgroundImage = 'url(https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png)'
  }
  previewCommentName.innerText = `${commentNameInput.value}`
})

commentInput.addEventListener('input', (evt) => {
  if (avatarInput.value === '') {
    previewComment.classList.add('show')
    previewIcon.style.backgroundImage = 'url(https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png)'
  } else if (avatarInput.value === '' && commentNameInput.value === '' && commentInput.value === '') {
    previewComment.classList.remove('show')
  }
  previewCommentBody.innerText = `${commentInput.value}`
})

commentInput.addEventListener('keyup', (evt) => {
  if (avatarInput.value === '' && commentNameInput.value === '' && commentInput.value === '') {
    previewComment.classList.remove('show')
  }
})

commentNameInput.addEventListener('keyup', (evt) => {
  if (avatarInput.value === '' && commentNameInput.value === '' && commentInput.value === '') {
    previewComment.classList.remove('show')
  }
})

avatarInput.addEventListener('keyup', (evt) => {
  if (avatarInput.value === '' && commentNameInput.value === '' && commentInput.value === '') {
    previewComment.classList.remove('show')
  }
})
