const input = document.getElementById("number")

const seven = document.querySelector(".num-seven")

seven.addEventListener("click", () => {
  input.innerText += 7
})
const eight = document.querySelector(".num-eight")

eight.addEventListener("click", () => {
  input.innerText += 8
})

const nine = document.querySelector(".num-nine")

nine.addEventListener("click", () => {
  input.innerText += 9
})

const div = document.querySelector(".num-div")

div.addEventListener("click", () => {
  input.innerText += "/"
})

const four = document.querySelector(".num-four")

four.addEventListener("click", () => {
  input.innerText += 4
})

const five = document.querySelector(".num-five")

five.addEventListener("click", () => {
  input.innerText += 5
})

const six = document.querySelector(".num-six")

six.addEventListener("click", () => {
  input.innerText += 6
})

const multi = document.querySelector(".num-mul")

multi.addEventListener("click", () => {
  input.innerText += "*"
})

const one = document.querySelector(".num-one")

one.addEventListener("click", () => {
  input.innerText += 1
})

const two = document.querySelector(".num-two")

two.addEventListener("click", () => {
  input.innerText += 2
})

const three = document.querySelector(".num-three")

three.addEventListener("click", () => {
  input.innerText += 3
})

const sub = document.querySelector(".num-sub")

sub.addEventListener("click", () => {
  input.innerText += "-"
})

const zero = document.querySelector(".num-zero")

zero.addEventListener("click", () => {
  input.innerText += 0
})

const dot = document.querySelector(".num-dot")

dot.addEventListener("click", () => {
  input.innerText += "."
})

const add = document.querySelector(".num-add")

add.addEventListener("click", () => {
  input.innerText += "+"
})

const equal = document.querySelector(".num-equal")

equal.addEventListener("click", () => {
  input.innerText = eval(input.innerText)
})

const clear = document.querySelector(".num-clear")

clear.addEventListener("click", () => {
  input.innerText = 0
})
