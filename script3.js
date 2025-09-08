// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ulCountries = document.createElement('ul')
countries.forEach((c) => {
  const li = document.createElement('li')
  li.textContent = c
  ulCountries.appendChild(li)
})
document.body.appendChild(ulCountries)

// 1.2
document.querySelector('.fn-remove-me').remove()

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulCars = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ulCars.appendChild(li)
})
document.querySelector('[data-function="printHere"]').appendChild(ulCars)

// 1.4
const countriesWithImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.createElement('div')
countriesWithImages.forEach((item) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = item.title
  const img = document.createElement('img')
  img.src = item.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  container.appendChild(div)
})
document.body.appendChild(container)

// 1.5
const btnRemoveLast = document.createElement('button')
btnRemoveLast.textContent = 'Eliminar último'
btnRemoveLast.addEventListener('click', () => {
  const allDivs = container.querySelectorAll('div')
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove()
  }
})
document.body.appendChild(btnRemoveLast)

// 1.6
container.querySelectorAll('div').forEach((div) => {
  const btn = document.createElement('button')
  btn.textContent = 'Eliminar este'
  btn.addEventListener('click', () => div.remove())
  div.appendChild(btn)
})
