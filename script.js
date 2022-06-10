const text = document.querySelector('#text')
const btn = document.querySelector('#btn')
const square = document.querySelector('#square')
const e_btn = document.querySelector('#e_btn')
const range = document.querySelector('#range')
const span = document.querySelector('#range-span')
const circle = document.querySelector('#circle')
let color
let rangeValue

e_btn.style.display = 'none'

const getColor = function (event) {
   color = event.target.value
}

const getRange = function (event) {
   rangeValue = event.target.value
   span.textContent = rangeValue
   circle.style.width = rangeValue + '%'
   circle.style.height = rangeValue + '%'
}

text.addEventListener('input', getColor)

btn.addEventListener('click', function () {
   square.style.backgroundColor = color;
})

range.addEventListener('input', getRange)



