const closeBtn = document.querySelector('.close-nav-btn')
const openBtn = document.querySelector('.open-nav-btn')
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.nav a')

const questions = document.querySelectorAll('.question-top')

const closeNavModal = () => {
  nav.classList.remove('navigation-open')
}

const openNavModal = () => {
  nav.classList.add('navigation-open')
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

closeBtn.addEventListener('click', closeNavModal)
openBtn.addEventListener('click', openNavModal)

links.forEach((link) => {
  link.addEventListener('click', closeNavModal)
})

questions.forEach((q) => {
  q.addEventListener('click', showAnswer)
})
