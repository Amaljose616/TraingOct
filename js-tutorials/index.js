 // let count = 0
// console.log (count) 

// let myAge = 35
// console.log (myAge)

// let classStudents = 25

// let students = 12

// let total = classStudents * students

// console.log (total)

// let age = 22
// let humanDogRatio = 7
//  let dogAge = age * humanDogRatio
//  console.log (dogAge)

//  let number = 1

//  number = number + 1
//   console.log  (number)

//   let bonusPoints = 50
//    bonusPoints += 50
//    bonusPoints -= 25
//    bonusPoints += 70
//    console.log (bonusPoints)

// document.getElementById("count-el").innerText=10
// 

// let text = "hello how are you"
// console.log(text)

// let myname = "Amal ,"
// let greeting = "How are you"
// let mygreeting = myname + greeting
// console.log(mygreeting)
// document.getElementById("welcome-el").innerText = mygreeting
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("counnt-el")
// let count = 0
// function increment() {
//     count = count + 1
//     console.log(count)
//     document.getElementById("count-el").innerText = count
// }
// function save() {
//      let countStr = count + " -"
//      saveEl.innerText += countStr
//     console.log(count)
//     countEl.textContent = 0
//     count  = 0
// }
// let firstname = "Amal"
// let lastname = "Jose"
// let fullname = firstname + lastname
// console.log (fullname)

// let Name = "linda"
// let greeting = "How are you"

// function mygreeting(){
//     console.log (greeting + " " + Name)
// }
// mygreeting()

// let myPoints = 3

// function add3points() {
//     myPoints += 3
// }
// function remove1point() {
//     myPoints -=1
// }
// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()

// console.log (myPoints)

// let priceEl = document.getElementById("price-el")

// function error(){
//     priceEl.innerText = "something went wrong, Please try again"
//     console.log("priceEl")
// }

let num1 = 8
let num2 = 16

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("sum-el")
function add(){
    let add = num1 + num2
    console.log(add)
    result.innerText = "Result : " + add
}
function sub(){
    let sub = num1 - num2
    console.log(sub)
    result.innerText = "Result : " + sub
}
function divide(){
    let div = num1 / num2
    console.log(div)
    result.innerText = "Result : " + div

}
function multi(){
    let multi = num1 * num2
    console.log(multi)
    result.innerText = "Result : " + multi
}


let firstcard = 10
let secondcard = 11
let sum = firstcard + secondcard

if (sum < 21){
    console.log("do you want to draw a new card ? :-")
}else if (sum === 21){
    console.log("woho0! you've got Blackjack !! :)")
}else if (sum > 21){
    console.log("you'are out of the game ! :(")
}