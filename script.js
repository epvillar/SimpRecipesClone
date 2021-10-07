
/* show nav links - 25.35*/

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

//pone current year - 44.41

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear