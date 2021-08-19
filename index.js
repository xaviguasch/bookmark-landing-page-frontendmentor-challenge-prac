const closeBtn = document.querySelector('.close-nav-btn')
const openBtn = document.querySelector('.open-nav-btn')
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.nav a')

const featBtns = document.querySelectorAll('.feat-btn')

const questions = document.querySelectorAll('.question-top')
const tabs = document.querySelectorAll('.tab')

const bookmarkingFeat = document.querySelector('#bookmarking-feat')
const searchingFeat = document.querySelector('#searching-feat')
const sharingFeat = document.querySelector('#sharing-feat')

// Form
const form = document.querySelector('.cta-form')
const inputMail = document.getElementById('input-mail')
const formBtn = document.querySelector('.btn-cta')
const regEx = /\S+@\S+\.\S+/

const closeNavModal = () => {
  nav.classList.remove('navigation-open')

  document.body.style.overflowY = 'scroll'
}

const openNavModal = () => {
  nav.classList.add('navigation-open')

  document.body.style.overflowY = 'hidden'
}

const showAnswer = (e) => {
  if (e.target.parentNode.nextElementSibling.classList.contains('show')) {
    e.target.parentNode.nextElementSibling.classList.remove('show')
  } else {
    questions.forEach((q) => {
      q.nextElementSibling.classList.remove('show')
    })
    e.target.parentNode.nextElementSibling.classList.add('show')
  }
}

const showFeature = (e) => {
  featBtns.forEach((featBtn) => {
    featBtn.classList.remove('feat-btn--active')
  })
  e.target.classList.add('feat-btn--active')

  tabs.forEach((tab) => {
    tab.classList.remove('active')
  })

  if (e.target.id === 'bookmarking-btn') {
    bookmarkingFeat.classList.add('active')
  } else if (e.target.id === 'searching-btn') {
    searchingFeat.classList.add('active')
  } else if (e.target.id === 'sharing-btn') {
    sharingFeat.classList.add('active')
  }
}

const checkInput = () => {
  if (inputMail.value.trim() !== '' && regEx.test(inputMail.value)) {
    console.log('nice email')
  } else {
    console.log('doing it badly')
  }
}

closeBtn.addEventListener('click', closeNavModal)
openBtn.addEventListener('click', openNavModal)

links.forEach((link) => {
  link.addEventListener('click', closeNavModal)
})

questions.forEach((q) => {
  q.addEventListener('click', showAnswer)
})

featBtns.forEach((featBtn) => {
  featBtn.addEventListener('click', showFeature)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
})
