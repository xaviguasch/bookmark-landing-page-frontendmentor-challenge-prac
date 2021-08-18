const closeBtn = document.querySelector('.close-nav-btn')
const openBtn = document.querySelector('.open-nav-btn')
const nav = document.querySelector('.nav')

const links = document.querySelectorAll('.nav a')

const closeNavModal = () => {
  nav.classList.remove('navigation-open')
}

const openNavModal = () => {
  nav.classList.add('navigation-open')
}

closeBtn.addEventListener('click', closeNavModal)
openBtn.addEventListener('click', openNavModal)

links.forEach((link) => {
  link.addEventListener('click', closeNavModal)
})
