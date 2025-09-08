// 2.1
const div1 = document.createElement('div')
document.body.appendChild(div1)

// 2.2
const div2 = document.createElement('div')
const p1 = document.createElement('p')
p1.textContent = 'Hola desde un div!'
div2.appendChild(p1)
document.body.appendChild(div2)

// 2.3
const div3 = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Párrafo ${i}`
  div3.appendChild(p)
}
document.body.appendChild(div3)

// 2.4
const dynamicP = document.createElement('p')
dynamicP.textContent = 'Soy dinámico!'
document.body.appendChild(dynamicP)

// 2.5
document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub'

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 2.7
document.querySelectorAll('.fn-remove-me').forEach((el) => el.remove())

// 2.8
const divs = document.querySelectorAll('div')
const middleP = document.createElement('p')
middleP.textContent = 'Voy en medio!'
divs[0].insertAdjacentElement('afterend', middleP)

// 2.9
document.querySelectorAll('.fn-insert-here').forEach((div) => {
  const insideP = document.createElement('p')
  insideP.textContent = 'Voy dentro!'
  div.appendChild(insideP)
})
