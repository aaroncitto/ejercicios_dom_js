// 1.1 -> Click en el botón
document.querySelector('#btnToClick').addEventListener('click', (event) => {
  console.log('Has hecho click en el botón!', event)
})

// 1.2 -> Focus en input con clase .focus
document.querySelector('.focus').addEventListener('focus', (event) => {
  console.log('Input en focus. Valor actual:', event.target.value)
})

// 1.3 -> Input en input con clase .value
document.querySelector('.value').addEventListener('input', (event) => {
  console.log('Valor mientras escribes:', event.target.value)
})

// EXTRA -> Lista de albums
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const ul = document.createElement('ul')
albums.forEach((album) => {
  const li = document.createElement('li')
  li.textContent = album
  ul.appendChild(li)
})
document.body.appendChild(ul)
