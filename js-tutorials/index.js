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

// let num1 = 8
// let num2 = 16

// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let result = document.getElementById("sum-el")
// function add(){
//     let add = num1 + num2
//     console.log(add)
//     result.innerText = "Result : " + add
// }
// function sub(){
//     let sub = num1 - num2
//     console.log(sub)
//     result.innerText = "Result : " + sub
// }
// function divide(){
//     let div = num1 / num2
//     console.log(div)
//     result.innerText = "Result : " + div

// }
// function multi(){
//     let multi = num1 * num2
//     console.log(multi)
//     result.innerText = "Result : " + multi
// }
// let age = 110


// if (age < 100){
//     console.log("Not elegible"
// }else if (age === 100){
//     console.log("Here is your birthday card from the king!")
// }else {
//     console.log("Not eligible, you have already gotten one")
// let variable = ["a","b","c"]

// let nvariable = "d"

// variable.push(nvariable)

// console.log(variable)

// for (count = 0; count < 11 ; count += 1){
//     console.log(count)
// }

// let sentence = ["hello",t"my","name","is","Amal"]
// let greetingEl = document.getElementById("greeting-el")
// for(let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// // let firstcard = getRandomCard()
// // let secondcard = getRandomCard()
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-txt")
// let cardEl = document.getElementById("card-el")
// console.log(cards)
// let playerName = "Amal "
// let playerChip = 145
// let playerEl = document.getElementById("player-el")
// playerEl.innerText = playerName + ":$ " + playerChip

//  function getRandomCard(){
//   let randomNumber = Math.floor( Math.random()*13 ) + 1
//    if (randomNumber > 10){
//     return 10
//    }else if (randomNumber === 1){ 
//     return 11
//    }else{
//     return randomNumber
//    }
//  }




// function startGame(){
//     isAlive = true
//      let firstcard = getRandomCard()
//      let secondcard = getRandomCard()
//      cards = [firstcard, secondcard]
//      sum = firstcard + secondcard
//     renderGame()
// }


// function renderGame(){
//     cardEl.textContent = "cards: "
//     for (let i = 0; i < cards.length ; i++){
//         cardEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum:" + sum
// if (sum <= 20){
//     message = "do you want to draw a new card ? :|"
// }else if (sum === 21){
//     message = "wohoo! you've got Blackjack !! :)"
//     hasBlackJack = true
// }else{
//     message = "you'are out of the game ! :("
//     isAlive = false
// }
// messageEl.textContent = message
// console.log(message)
// }

// function newCard(){
//     if (isAlive === true && hasBlackJack === false){
//     let card = getRandomCard()
//     sum += card
//     renderGame()
//     cards.push(card)
//     console.log(cards)
//     }
// }

let number = 12

function primeNumber(){

}




// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time < player2Time){
//         return player1Time
//     } else if ( player2Time < player1Time){
//         return player2Time
//     }else{
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)

// let x = 1000000
// let y = 534
// let z = 5200000000
// function greatestNumber() {
//     if (x > y && x > z){
//         return x
//     }else if (y > x && y > z){
//         return y
//     }else if (z > x && z > y){
//         return z
//     }
// }
// let result = greatestNumber()
// console.log (result)


// function rollDice(){
// let randomNumber = Math.floor(Math.random() * 6)+1
// console.log(randomNumber)
// }
// console.log (rollDice())

// let x = 100
// let y = 20
// let z = 50

// function greatest() {
//     if (x > y){
//         if (x > z){
//             return x
//         }
//     } else if (y > x){
//         if(y > z){
//             return y
//         }
//     }else{
//         return z
//     }
// }
// let result = greatest()

// console.log (result)

// let Name = "Amal"
// let Age = 21 
// let country = "India"

// function logData(){
//     let result = Name + " is " + Age + " years old and lives in " + country
//     console.log(result)
// }
// logData()


// let person = {
//     Name: "Amal",   
//     age: 21,
//     country: "india"
// }
// function logData(){
//     console.log(person.Name + " is " + person.age + " years old and lives in " + person.country)
// }
// logData()


// let age = 100

// if (age < 6){
//     console.log("free")
// }else if (age < 18){
//     console.log("child discount")
// }else if (age < 27){
//     console.log("student discount")
// }else if (age < 67){
//     console.log("full price")
// }else{
//     console.log("senior citizen discount")
// }

// 

// function saveLead() {
//     console.log("Button Clicked")
// }
// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function(){
//     console.log("button clicked from addEventlistner   ")
// })



// divEl = document.getElementById("div-el")

// divEl.innerHTML = "<button onclick='buy()'> element </button>"

// function buy(){
//     divEl.innerHTML = "<p>ThankYou </p>"
// }

let a = 8
let p = "not a prime number"
let q = "it's prime number"
for(let i = 2 ; i < a ; i++){
    if(a % i === 0){
        console.log(p)
    }
        else{
        console.log(q)
    }
}

// let a = 10
// let x = "not a prime number"
// let y = "it's prime number"

// for(i=0;i<a;i++){
//     if(a = 2){
//         return y
//     }else if (a = 3){
//         return y
//     }else if (a = 6 * i - 1){
//         return y
//     }else if (a = 6 * i + 1){
//         return y
//     }else{
//         return x
//     }
// }

// // console.log(prime())