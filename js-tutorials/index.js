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

//   let number = 1

//  number = number + 1
//   console.log  (number)

//   let bonusPoints = 50
//    bonusPoints += 50
//    bonusPoints -= 25
//    bonusPoints += 70
//    console.log (bonusPoints)

// document.getElementById("count-el").innerText=10

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

// let number = 12

// function primeNumber(){

// }

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

// let a = 1
// let p = "not a prime number"
// let q = "it's prime number"
// for(let i = 2 ; i < a ; i++){
//     if(a % i === 0){
//         console.log(p)
//     }
//         else{
//         console.log(q)
//     }
// }if(a===2){
//     console.log(q)
// }else if (a == 1){
//     console.log("neither a prime nor a composite")
// }

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

// let count = 0
// for (count = 0 ; count < 11 ; count=count + 2){
//     console.log(count)
// }
// let resultEl = document.getElementById("result-el")

//  for (let i = 1; i < 11 ; i++){
//     for (let j = 1 ; j < 11 ; j++){
//     let result = i * j
//     console.log(result)
//     }}

// let km = 10
// let kmMileRatio = 0.621371
//  let miles = km * kmMileRatio
//  console.log(miles)

// let a = 21
// let b = 0
// let c = a / b
// console.log (c)

// let lastNameLength = 0
// let lastName = "Lovelace"
// lastNameLength = lastName.length
// console.log(lastNameLength)

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//     var result = ""
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store"
//     return result
// }
// console.log(wordBlanks("dog", "big" , "ran" ,"quickly"))

// function greet (name){
//     console.log("hello " + name)
// }
// greet ("amal")
// var changed = 0
// function change (num){
// return  (num +5)/3
// }
// changed =change(10)

// var processed = 0
// function processArg (num){
//     return (num + 3)/5
// }
// processed = processArg(7)

// function ourTrueOrFalse(isItTrue){
//     if(isItTrue){
//         return "yes, it's true"
//     }
//     return "no, it's false"
// }
// function ourTrueOrFalse(wasThatTrue){
// if (wasThatTrue){
//     return "yes,that was true"
// }
// return "no ,that was false"
// }
// console.log (ourTrueOrFalse(true))

// function testEqual(val){
//     if (val == 12){
//         return "equal"
//     }
//     return "not equal"
// }
// console.log(testEqual(10))

// function orderMyLogic(val){
//     if (val < 10){
//         return "Less than 10"
//     }else if (val < 5){
//         return "Less than 5"
//     }else {
//         return"Greater than or equal to 10"
//     }
// }
// console.log(orderMyLogic(7))

// var names = ["Hole-in-one!","Eagle","Birdie","par","Bogey","Double Bogey","Go-home"]

// function golfScore(par,strokes){
//     if(strokes == 1){
//         return names[0]
//     }else if (strokes <= par -2){
//         return names[1]
//     }else if(strokes == par -1){
//         return names[2]
//     }else if (strokes == par){
//         return names[3]
//     }else if (strokes == par + 1){
//         return names [4]
//     }else if (strokes == par +2 ){
//         return names[5]
//     }else if (strokes >= par + 3){
//         return names[6]
//     }
// return "Change Me"
// }
// console.log (golfScore(5,4))

// function caseInSwitch(val){
//     var answer = ""
//     switch(val){
//         case 1:
//             answer = "alpha"
//             break
//         case 2:
//             answer = "beta"
//             break
//         case 3:
//             answer = "gamma"
//             break
//         case 8:
//             answer = "delta"
//             break
//     }
//     return answer
// }
// console.log(caseInSwitch(8)

// function isLess(a,b){
//     return a < b
// }
// console.log(isLess(5,))

// function abTest(a,b) {
//     if (a < 0 || b < 0){
//         return undefined
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
// }
// console.log(abTest(-2,2))

// var count = 0
//  function cc(card){
//     switch (card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count ++
//             break
//        case 10:
//        case "J":
//        case "Q":
//        case "K":
//        case "A":
//         count --
//         break
//     }
//     var holdbet = 'Hold'
//     if (count > 0){
//         holdbet = 'Bet'
//     }
//     return count + " " + holdbet
//  }
//  cc(2); cc('K'); cc(10); cc ('k'); cc('A');
//  console.log(4)

// var ourDog = {
//     "name":"Camper",
//     "legs":4,
//     "tails":1,
//     "friends" : ["everything!"]
// }
// var myDog = {
//     "name":"chikku",
//     "legs":3,
//     "tails":2,
//     "friends":[]
// }

// var testObj = {
//     "hat": "ballcap",
//     "shirt":"jersy",
//     "shoe":"cleats"
// }
// var hatValue = testObj.hat
// var shirtValue = testObj.shirt
// console.log(hatValue)
// console.log(shirtValue)

//  var myMusic = [
//     {
//         "artist":"Biller joel",
//         "title": "piano man",
//         "release_year:1973",
//         "formates":[
//             "cd","8t","lp"
//         ],
//         "gold":true
//     },
//     {
//         "artist":"Beau Carnnes",
//         "title":"Cereal Man",
//         "release_year":2003,
//         "formates":[
//             "youtube video"
//         ]
//     }
//  ]

// var myStorage = {
//     "car": {
//         "inside" :{
//             "glove box":"maps",
//             "passenger seat":"crumbs"
//         },

//     "outside":{
//         "trunk":"jack"
//     }
// }
// }
// var gloveBoxContents = myStorage.car.inside["glove box"]
// console.log(gloveBoxContents)

// var myPlants = [
//     {
//         type:"flowers",
//         list:[
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type:"trees",
//         list : [
//             "fir",
//             "pine",
//             "birch"
//         ]

//     }
// ]
// var secondTree = myPlants[1].list[1]
// console.log(secondTree)

// var collection = {
//     "2548":
//     {
//         "album":"Slippery When Wet",
//         "artist":"prince",
//         "tracks":[
//             "1999","Little Red  Covertte"
//         ]

//     },
//     "1245":{
//         "artist":"Robert Palmer",
//         "tracks" : []
//     },
//     "5439"{
//         "album":"ABBA Gold"
//     }
// }
// var collectionCopy = JSON.parse(JSON.stringify(collection))
// function updateRecords(id, prop, value){
//     if(value === ""){
//         delete collection[id][prop]
//     }else if (prop === "tracks"){
//        collection[id][prop] = collection  || []
//        collection[id][prop].push(value)
//     }else{
//         collection[id][prop] = value
//     }
//     return collection
// }

// updateRecords(5439, "artist","ABBA")

// var myArray = []
// var i = 0
// while(i < 5){
//      myArray.push(i)
//      i++
// }
// console.log(myArray)

// var  OurArray = []

// for (var i = 0; i <  5 ; i++){
//     OurArray.push(i)
// }

// var myArray = []
// for (var i = 1; i < 6; i++){
//     myArray.push(i)
// }
// console.log(myArray)

// var ourArray = []

// for (var i = 1 ; i<10 ; i += 2){
//     ourArray.push(i)
// }
// console.log(ourArray)

// var ourArray = []

// for (var i = 10 ; i>0 ; i -= 2){
//     ourArray.push(i)
// }
// console.log(ourArray)

// var ourArr = [9, 10, 11, 12]
// var ourTotal = 0

// for (var i = 0; i < ourArr.length ;i++){
//     ourTotal += ourArr[i]
// }
// console.log(ourTotal)

//  var myArray = []
//  var i = 10

//  do{
//     myArray.push(i)
//     i++
//  }while(i < 5)

// let sample = 2
// console.log(sample)

// alert("hello world")

// let js= "amazing"
// console.log(48+23-10)

// let firstName = "jonas"
// console.log(firstName)

// let myFirstJob = "programmer"
// let myCurrentJob = "teacher"
// console.log(myFirstJob)
// console.log(myCurrentJob)

// let country = "india"
// let continent = "asia"
// let population = "10 million"
// console.log(country, continent, population)

// let javaScriptIsFun = true
// console.log(typeof javaScriptIsFun)
// console.log(typeof 45)
// console.log(typeof "hello")
// console.log(typeof null)

// var element = 5622
// let sample = 566

// element = 9888
// sample = 123

// console.log(element, sample)

// let age = 30
// age = 32

// const birthyear = 1991

//  var job = "programmer"
//  job = "teacher"
//  lastName = "krish"
//  console.log(lastName)

//  firstName = "gopz"
//  console.log(firstName)

// const ageAmal = 2022 -2000
// const ageAshlin =2022 - 2004
// console.log(ageAmal - ageAshlin)

// let cube = 2 ** (1/2)
// console.log(cube)

// firstName = "amal"
// lastName = "jose"
// console.log(firstName + " " + lastName)

// let x = 10 + 5
// x += 10
// let y = 8
// console.log(x > y)

//  let x =58
//  let y = 36
//  let avg = (x+y)/2
//  console.log(avg)

// let markMass = 78
// let markheight = 1.69
// let markBmi = markMass / (markheight * markheight)

// let johnMass = 85
// let johnHeight = 1.95
// let johnBmi = johnMass / (johnHeight * johnHeight)
// let markHigherBmi = markBmi > johnBmi
// console.log(markBmi, johnBmi, markHigherBmi)

// let firstName = "Amal"
// let job = "software developer"
// let birthYear = 2000
// let year = 2022
// let amal = "I'm "+ firstName +", a " + (year - birthYear) +  "years old " + job + "!"
// let amalNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`
// console.log(amalNew)
// console.log(amal)

// const age = 15
// const isOldEnough = age >= 18
// if(isOldEnough){
//     console.log("sarh can start driviing licence")
// }else {
//     const yearsLeft = 18 - age
//     console.log(`sarh is too young. wait another ${yearsLeft} years :)`)
// }

// const birthYear =1999
// if (birthday <= 2000){
//     let century = 20
// }else{
//     century = 21
// }
// console.log(century)

// const inputYear = '1911'
// console.log(Number(inputYear)+18)
// console.log(inputYear+ 18)

// let money = 1

// if (money){
//     console.log("don't spend it all")
// }else{
//     console.log("you should get a job")
// }
//  let favorite = Number(prompt("what's your favorite number "))
//  if (favorite === 23){
//     console.log("23 is cool number")
//  }else if (favorite === 7){
//     console.log("7 is also a cool number")
//  }else{
//     console.log("neither 23 nor 7")
//  }
// let letter = favorite * 12
// console.log(letter)

// let scoreDolphins = (96+108+89)/3
// let scoreKoalas = (88 + 91 + 110)/3
// console.log(scoreDolphins, scoreKoalas)

// if(scoreDolphins > scoreKoalas ){
//     console.log("Dolphins win the trophy")
// }else if(scoreKoalas > scoreDolphins){
//     console.log("Koalas win the trophy")
// }else if(scoreDolphins === scoreKoalas){
//     console.log("Both win the trophy")
// }

// const day = "monday"
// switch(day){
//     case "monday":
//         console.log("plan course structure")
//         console.log("go to coding meetup")
//         break
//     case "tuesday":
//         console.log("Prepare theory videos")
//         break
//     case "wednesday":
//     case "thursday":
//         console.log("write code examples")
//         break
//     case "friday":
//         console.log("Record videos")
//         break
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend")
//         break
//     default:
//         console.log("not a valid day")
// }
// const age = 15
// age >= 18 ? console.log('i like to drink wine'): console.log('i like to drink water')
// const bill = 275
// const tip =bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// let hasDriversLicense  = false
// let passTest = true

// if (passTest) hasDriversLicense = true
// if(hasDrivers) console.log("I can drive")

// const interface = "audio"

// function logger(){
//     console.log("my name is Amal")
// }
// logger()

// function fruitProcessor(apples, oranges){
//    console.log(apples,oranges)
//    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//    return juice
// }

// let fruitJuice = fruitProcessor(5,0)
// console.log(fruitJuice)

// function calcAge1(birthYear){
//     const age = 2022 - birthYear
//     return age
// }
// const age1 = calcAge1(2000)
// console.log(age1)

// const calcAge2 = function (birthYear){
//     return 2037-birthYear
// }
// const age2 = calcAge2 (1999)
// console.log(age1,age2)

// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3 (1991)
// console.log(age3)

// const yearsUntilRetirement = (birthyear, firstName) =>{
//     const age = 37
//     const retirement = 65 - age
//     // return retirement
//     return`${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1991,"amal"))
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//        console.log(apples,oranges)
//        const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
//         return juice
//      }
// console.log(fruitProcessor(5,4))

// const calcAverage = (a,b,c) => (a + b + c)/3
// console.log(calcAverage(3,4,5))

// const scoreDolphins = calcAverage (44, 23, 71)
// const scoreKoalas = calcAverage (65, 54, 49)
// console.log(scoreDolphins,scoreKoalas)

// const checkWinner = function(avgDolphins, avgkoalas){
//  if(avgDolphins >= 2 * avgkoalas){
//     console.log(`Dolphins win(${avgDolphins} vs. ${avgkoalas})`)
//  }else if(avgkoalas >= 2 * avgDolphins){
//     console.log(`Koalas win(${avgkoalas} vs. ${avgDolphins})`)

//  }else{
//     console.log('No team wins...')
//  }
// }
// checkWinner (scoreDolphins,scoreKoalas)

// const friends = ['micheal','steven','peter','elias','jackie','sagar']
//  console.log(friends)

// const years = new Array(191,98,86,89)
// console.log(years)

// console.log(friends[1])

// const calcAge = function (birthYear){
//     return 2037 - birthYear
// }
// const years = [1990,1967,2002,2010,2018]
// console.log(calcAge(years))

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill* 015 : bill * 0.2
// }
// const bills = [125, 555, 44]
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills,tip)

// const jonas = {
//     firstName : "jonas",
//     lastName : "jhonny",
//     birthYear : 1991,
//     job : "teacher",
//     friends : ["Michael","Peter","Steven"],
//    hasDrversLicense : true,
// //    calcAge: function (birthYear){
// //     return 2037 - birthYear;
// //    }
// calcAge: function(){
//     console.log(this)
//     return 2037 - this.birthYear
// }
// }
// console.log(jonas.calcAge())

// const Mark = {
//     fullName : 'Mark Miller',
//     mass : 78,
//     height :1.69,
//     calcBMI: function(){
//         return Mark.mass/ Mark.height **2
//     }
// }
// const john ={
//     fullName : "John Smith",
//     mass : 92 ,
//     height:1.95,
//     calcBMI: function(){
//         return john.mass/ john.height **2
//     }
// }
// if(john.calcBMI() > Mark.calcBMI()){
// console.log(`${john.fullName}'s BMI ${john.calcBMI()} is higher than ${Mark.fullName}'s ${Mark.calcBMI()} `)
// }else{
// console.log(`${john.fullName}'s BMI ${john.calcBMI()} is lesser than ${Mark.fullName}'s ${Mark.calcBMI()} `)

// }

// const Amal = {
//     fullName : "Amal Jose",
//     age : 22,
//     height :1.72,
//     mass :61,
//     calcBMI: function (){
//         return this.mass/this.height **2
//     }
// }
// console.log(`${Amal.fullName}`)
// console.log(Amal.calcBMI())
// let x
// for (let i=1 ; i <11 ; i ++){
//  x = "Lifting weights i"
//  console.log(x)
// }

// for(let rep = 1;rep <= 10 ; rep ++){
//     console.log(`lifting weights repetitions ${rep} `)
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 -1991,
//     'teacher',
//     ['michael','Peter','steven']

// ]
// for(let i = 0;i < jonasArray.length; i++){
//     console.log(jonasArray[i]);
// }
// console.log(jonasArray[4][1])

// const years = [1991,1998,1999,2001,2000]
// const age = []
// for (let i=0 ; i < years.length ; i++){
//     age.unshift(2022 - years[i])
// }
// console.log(age)

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 -1991,
//     'teacher',
//     ['michael','Peter','steven']
// ]

// for(let i = jonasArray.length - 1 ; i >= 0 ; i-- ){
//      console.log(jonasArray[i]);
// }

// let rep = 11
// while (rep <= 10){
//     console.log(`Lifting weights repetitions ${rep}`)
//     rep++
// }

// let dice = Math.trunc(Math.random()*6)+1
// console.log(dice)

// while(dice !== 6){
//     console.log(`you rolled a ${dice}`)
//     dice = Math.trunc(Math.random()*6)+1
//     if (dice === 6) console.log('Loop is about end..')
// }

// const calcTip = function (bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// const bills = [22,295,176,440,37,105,10,1100,86,52]
// const tips = []
// const totals = []

// for (let i =0; i <bills.length; i++){
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push(tip+bills[i])
// }
// console.log(bills, tips, totals)
// const calcAverage = function(arr){
//     let sum = 0
//     for (let i=0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     console.log(sum)
//     return sum /arr.length
// }
// console.log(calcAverage(2,3,7))

// "use strict";
// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear
// console.log();
// console.log("hello")

// 'use strict'

// const tempratures = [3,-2,-6,-1,,9,13,17,15,14,9,5]

//   const calcTempAmplitude = function (temps){
//     let max = temps[0]
//     let min = temps[0]
//     for(let i = 0;i < temps.length;i++){

//         const curTemp = temps[i]
//         if(typeof curTemp != 'number')continue
//         if(temps[i]>max) max =temps[i]
//         if (temps[i]< min ) min = temps[i]
//     }
//     console.log(max,min)
//     return max-min
//   };
//   calcTempAmplitude([3,7,4,23])
//   const amplitude = calcTempAmplitude(tempratures)
//   console.log(amplitude)
//   console.log(Math.max(...tempratures)

// const array1 = ['a','b','c']
// const array2 = ['d','e','f']
// const array3 = array1.concat(array2)
// console.log(array3)

// const tempratures = [3,-2,-6,-1,,9,13,17,15,14,9,5]

//   const calcTempAmplitudeNew = function (t1 , t2){
//     const array1 = ['a','b','c']
//     const array2 = ['d','e','f']
//     const array3 = array1.concat(array2)
//     const temps =t1.concat(t2)
//     console.log(temps)
//     let max = temps[0]
//     let min = temps[0]
//     for(let i = 0;i < temps.length;i++){

//         const curTemp = temps[i]
//         if(typeof curTemp != 'number')continue
//         if(temps[i]>max) max =temps[i]
//         if (temps[i]< min ) min = temps[i]
//     }
//     console.log(max,min)
//     return max-min
//   };
//   calcTempAmplitudeNew([3,7,4,23])
//   const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5])
//   console.log(amplitudeNew)
//   console.log(Math.max(...tempratures)

// const measureKelvin = function(){
//     const measurement = {
//         type:'temp',
//         unit:'celsius',
//         value:Number(prompt('Degree celsius')),
//     };
//     const kelvin = measurement.value + 273
//     return kelvin
// };
// console.log(measureKelvin());

// const day = "monday"
// switch(day){
//     case "monday":
//         console.log("plan course structure")
//         console.log("go to coding meetup")
//         break
//     case "tuesday":
//         console.log("Prepare theory videos")
//         break
//     case "wednesday":
//     case "thursday":
//         console.log("write code examples")
//         break
//     case "friday":
//         console.log("Record videos")
//         break
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend")
//         break
//     default:
//         console.log("not a valid day")
// }

// const data1 =[17,21,23]
// const data2 =[12,5,-5,0,4]
// console.log(`${data1[0]}°C...${data1[1]}°C ... ${data1[2]}°C ...`)

// const printForcast = function(arr){
//     let str =''
//     for(let i=0 ; i < arr.length; i++){
//     str +=`${arr[i]}°C in ${i+1} days ... `
//     }
//     console.log('...' + str)
// }
// printForcast(data1)

'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number';

//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = 0;
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   (score = 20), (secretNumber = Math.trunc(Math.random() * 20) + 1);
//   document.querySelector('.message').textContent = 'Start Guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// let n = 91;

// if ((n - 1) % 3 === 0) {
//   console.log('number is in the form of 3n+1');
// } else {
//   console.log('number is not in the form of 3n+1');
//

'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

//   const closeModal = function(){
//     modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   }
//   btnCloseModal.addEventListener('click', closeModal)
//   overlay.addEventListener('click', closeModal)

//   document.addEventListener('keydown', function(){
//     console.log("A key was pressed")
//   })
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListner('click', openModal);

// btnCloseModal.addEventListner('click', closeModal);
// overlay.addEventListner('click', closeModal);

// document.addEventListener('keydown', function () {
//   console.log('A key was pressed');
// });
// selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;

// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer == 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//       current0El.textContent = currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--ative');
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init());

// let n = 5;

// if ((n = 5)) {
//   let amal = 35;
//   console.log(amal);
// } else {
//   let achi = 25;
//   console.log(achi);
// }

// console.log(amal);

// const myName = 'jonas';

// function first() {
//   const age = 30;

//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }

//   function second() {
//     const job = 'Teacher';
//     console.log(`${myName} is a ${age}-old ${job}`);
//   }
//   second();
// }
// first();

// const a = 'jonas';
// first();

// function first() {
//   const b = 'hello!';
//   second();

//   function second() {
//     const c = 'Hi!';
//     third();
//   }
// }
// function third() {
//   const d = 'Hey!';
//   console.log(d + c + b + a);
// }

'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName},you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'steven';
//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'jonas';
// calcAge(1991);

// const myName = 'jonas';

// if (myName === 'jonas') {
//   console.log(`jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = `teacher`;
//   console.log(x);
// }

//

// console.log(addDec1(5, 8));
// console.log(addExpr(5, 8));
// console.log(addArrow(5, 8));

// function addDec1(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x =1
// let y = 2
// const z = 3

// console.log(x === window.x)

// console.log(this);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991, calcAge: function(){
//     console.log(this)
//     console.log(2037-this.year)
//   }
// }
// jonas.calcAge()

// const matiilda = {
//   year: 2017
// }

// matiilda.calcAge = jonas.calcAge
// matiilda.calcAge()

// const f = jonas.calcAge

// f();
// var firstName = 'Matilda'
// const jonas = {
//   firstname: 'jonas',
//   year: 1991,
//   calcAge: function(){
// console.log(this)
// console.log(2037-this.year)
//  const self = this
//   const isMillenial =  function(){
//     console.log(self)
//     console.log(self.year >=  1981 && this.year <= 1996)
//     // console.log(this.year >=  1981 && this.year <= 1996)
//   }
//     const isMillenial = () => {
//       console.log(this)
//       console.log(this.year >= 1981 && this.YEAR <= 1996)
//     }
//       isMillenial()
//     },
//     greet: () => {
//       console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// }
//   jonas.greet()
//   jonas.calcAge()

//   const addExpr = function(a,b){
//     console.log(arguments)
//     return a + b
//   }
//   addExpr(2,3)
//   var addArrow = (a,b) => a + b

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// let lastName = 'williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// const jessica2 = {
//   firstName : 'Jessica',
//   lastName : 'Williams',
//   age : 27,
//   family:['Alice',`Bob`]
// }
// const jessicaCopy =Object.assign({},jessica2)
// jessicaCopy.lastName = `Davis`

// jessicaCopy.family.push(`mary`)
// jessicaCopy.family.push(`John`)

// console.log(`Before marriage:`,jessica2)
// console.log(`After marriage:`,jessicaCopy)

//-----------------------SLACK-------------------------

// 'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   startMenu: ['Focaccia', 'Bruscchetta', 'Garlic Bread', 'Caprese salad'],
//   mainmenu: ['pizza', 'Pasta', 'Risotto'],
//   const =  openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex = 1, mainIndex = 0, time = '20:00', address) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del sole,21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// orderPastha:function(ing1,ing2,ing3)
// const {{}
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [1] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const abj = { a: 23, b: 7, c: 14 }(({ a, b } = obj));
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu =[...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu)

// const someNew = [...badNewArr, ...newArr];
// console.log(someNew);

// const str = 'Jonas';
// const letters = [...str, '', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! ingredient 1?"),
//   prompt("Let's make pasta! ingredient 2?"),
//   prompt("Let's make pasta! ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// restaurant.orderPasta(...ingredients)
// // console.log(`${...str} Schmedtmann`)
// const newRestuarant = { foundedIn : 1998, ... restaurant, founder:'Guiseppe'}
// console.log(newRestuarant)

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name)

// const Arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// orderPizza.function(mainIngredient,...otherIngrediennts) {
//   console.log(mainIngredient)
//   restaurant.oderPizza('mushroom',)
// }
// const menu = [...restaurant.startMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item)
// for (const item of menu.entries()){
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }

// console.log([...menu.entries()])
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary
// secondary = temp
// console.log(main, secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]]
// const [i, ,j] = nested;
// console.log(i,j)

// const[i, [j,k]] = nested
// console.log(i,j,k)

// const [p, q, r] = [8,9]
// console.log(p, q, r)

// console.log('----OR----');

// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');

// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spanich');
// }
// restaurant.orderPizza && restaurant.orderPizza
// ('mushrooms', 'spinach');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorect = restaurant.numGuests ?? 10 ;
// console.log(guestCorect)

// const rest1 = {
//   name: 'capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',

//   players: [
//     [
//       'never',
//       'Pavard',
//       'Martinez',
//       'Alba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       ,
//       'Coman',
//       'Muller',
//       'Gnabry',
//       'lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewendoski', 'Gnarby', 'Lewendoski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies','Muller','Lewandowski','Kimich')
// // printGoals('Davies','Muller')
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of Object.values(game.odds)) average += odd;
// average /= Object.values(game.odds).length;
// console.log(average);

// for(const [team,odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw':`victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`)
// }

// console.log(restaurant.openingHours.mon.open);

// if (resturant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   restuarant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// console.log(restuarant.orderRisotto?.(0, 1) ?? 'Method  does not exist');

// // const users = [{name:'jonas', email:'hello@jonas.io'}]

// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// const  prooperties = Object.keys(openingHours)
// console.log(prooperties)

// console.log(`we are open on ${prooperties.length} days`)

// for(const day of Object.keys(openingHours)){
//   console.log(day)
// }
// let openstr =`we open on${prooperties.length}`

// console.log(openstr)

// const values = Object.values(openingHours)
// console.log(entries)

// for(const [key,{open,close}] of entries){
//   console.log(`on ${key} we open at ${open} and close at ${close}`)
// }

'------slack  -------';

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );

// console.log(new Set('amaljose').size);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest
//   .set('categories', ['itallian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'))
// rest.delete(2)
// console.log(rest)
// console.log(rest.size)

// rest.set()

// console.log(rest.get([1,2]))

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object(openingHours));

// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'][(80, 'GOAL')][(92, 'Yellow card')],
// ]);

// // console.log(gameEvents.values())
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happend, on average, every ${90 / gameEvents.size} minutes `
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happend, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}:${event}`);
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[3]);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));

// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// const checkMiddleSeat = function(seat){
//  const s =seat.slice(-1)
//  if (s === 'B' || s ==='E'){
//   console.log('You got the middle seat')
//  }else{
//   console.log('you got lucky')
//  }
// }
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// console.log(new String('jonas'))

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jonAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@gmail.com';
// const loginEmail = ' Hello@Gmail.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(lowerEmail);
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', '&').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23.Boarding  door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// const plane = 'Air A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('boeing'));
// console.log(plane.includes('Air'));

// if (plane.startsWith('Air') && plane.endsWith('neo')) {
//   console.log('Part of the NEW AIRbus family');
// }

// const checkBaggage = function(items){
//   const baggage = items.toLowerCase()
//   if((baggage.includes('Knife'))||(baggage.includes('gun'))){
//     console.log('You are NOT allowed on board')
//   }else{
//     console.log('Welcome aboard!')
//   }
// }
// checkBaggage('I have a laptop,some Food and  a pocket Knife')
// checkBaggage('Socks and camera')
// checkBaggage('Got some snacks and a gun for protection')

// console.log('a+very+nice+string'.split('+'));
// console.log('Amal jose'.split(' '));

// const [firstName, lastName] = 'Amal jose'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica and smith davis');
// capitalizeName('amal jose');

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '.').padEnd(30, '+'));
// console.log('jonas'.padStart(23, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(45674565434565489));
// console.log(maskCreditCard(23456789876543));

// const message2 = 'Bad weather... All Departues Delayed...'
// console.log(message2.repeat(5))

// const planesInline = function(n){
//   console.log(`There are ${n} planes in line ${'*'.repeat(n)}`)
// }
// planesInline(5)
// planesInline(3)
// planesInline(12)

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const row in rows.entries){
//    const  [first,second] = row.toLowerCase().trim().split('_')
//    console.log(row,first,second)
//   const output = `${first}${second.replace(second[0],second[0].toUpperCase)}`
//   console.log(output)
//   }
// });
// console.log(`${output.padEnd(20)}`)

// const flights =
//   '_Delayed _Departure;fao93766109;txtl2133758440;11:25 +_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel74392998';

// console.log(flights.split('+'));

// for (const flight of flights.split('+')) {
//   console.log(flights);
// }
// const [] flight.slplit(';')
// const output = `${type.replaceAll('_','')} ${from} ${to} (${time})`
// console.log(output)

// 'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH1234', 120, 8000);
// createBooking('LH123', 5);

// const flight = 'LH234';
// const amal = {
//   name: 'Amal Jose',
//   passport: 2345678,
// };

// const checkIn = function (flightNum, passanger) {
//   flightNum = 'LH999';
//   passanger.name = 'Mr.' + passanger.name;

//   if (passanger.passport === 2345678) {
//     alert('Check in');
//   } else {
//     alert('wrong passport!');
//   }
// };
// checkIn(flight, amal);

// console.log(flight)
// console.log(amal)

// // flightNum = flight
// const flightNum = flight
// const passanger =  amal

// const newPassport = function (person){
//   person.passport = Math.trunc(Math.random() * 10000000000)
// }
// // const  = new type(arguments);
// newPassport(amal)
// checkIn(flight,amal)

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string:${str}`);
//   console.log(`Transformed string:${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Jonas','Martha','Adam'].forEach(high5)

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('hello')('jonas')

// const greetArr = greeting => name => console.log(`${greeting}${name}`)

// greetArr('hi')('jonas')

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, 'Amal Jose');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   booking: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'aachi');
// console.log(eurowings);

// book.call(lufthansa, 239, 'amal');
// console.log(lufthansa);

// const swiss ={
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],

// }

// book.call(swiss,583,'mary')
// connsole.log(swiss)

// const flightData = [583, 'amaljose']
// book.appply[swiss,flightData]
// console.log(swiss)

// book.call(swiss, ...flightData)

// const bookW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)
// const bookLX = book.bind(swiss)
// bookEW(23,'steven')

// const bookEW23 = book.bind(eurowings, 123)
// bookEW23('martha')

// lufthansa.planes = 300
// lufthansa.buyPlane = function(){
//   console.log(this)

//   this.planes++
//   console.log(this.planes)
// }
// lufthansa.buyPlane()

// document.querySelector('.buy').addEventListener(
//   'click', lufthansa.buyPlane)

// const addTax = (rate, value) => value + value * rate
// console.log(addtax(0.1,200))

// const addVAT = addtax.bind(null, 0.23)

// console.log(addVAT(100))
// console.log(addVAT(23))

// const addTaxRate = function(rate){
//   return function(value){
//     return value + value * rate
//   }
// }
// const addVAT2 = addTaxRate(0.23)

// const poll = {
//   question: 'What is your favorite programming language ?',
//   options: ['0:JavaScript', '1:Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//     this.
//   },
//   displayResults(type ='array'){
//     if(type === 'array'){
//       console.log(this.answers)
//     }else if(type === 'string'){
//       console.log(`Poll results are ${this.answers.join(',')}`)
//     }
//   }
// };
// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   poll.displayResults.call({answers: [5, 2, 3]},'string')
//   poll.displayResults.call({answers: [1, 5, 2, 3, 9, 6]},'string')
//   poll.displayResults.call({answers: [1, 5, 2, 3, 9, 6]})

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce()(function () {
//   console.log('This will never run again');
//   const isPrivate =23
// })();

// console.log(isPrivate)

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23
//   var notPrivate = 46
// }
// console.log(notPrivate)

// const secureBooking = function(){
//   let passengerCount = 0

//   return function(){
//     passengerCount++
//     console.log(`$(passengerCount) passengers`)
//   }
// }
// const booker = secureBooking()

// // ------SLACK-------

// booker()
// booker()
// booker()

// console.dir(booker)

// let f;
// const g = function(){
//   const a= 23
//   f=function(){
//          console.log(a*2)
//   }
// }
// const h = function(){
//   const b = 777
//   f=function(){
//     console.log(b*2)
//   }
// }
// g();
// f()
// console.dir(f)
// h()
// f();

// console.dir(f)

// const boardPassengers = function(n, wait){
//   const perGroup = n / 3
//   setTimeout(function(){},1000)
//   console.log(`will start boarding in ${wait} seconds`)
// }
// setTimeout(function(){
//   console.log('TIMER')
// },1000)

// const perGroup = 1000;
// boardPassengers(180,3)

// (function () {
//   const header = documents.querrySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener
//   ('click',function(){
//     header.style.color = 'blue'
//   })
// })();

'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// const createUsernames = function(user){
// const username = user.toLowerCase().split(' ').map(name => name[0]).join('')
// return username
// }
// const user = 'Steven Thomas Williams'

// console.log(createUsernames('Steven Thomas Williams'))

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = user.owner;
  });
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};
createUsernames(accounts);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// // console.log(arr.splice(2));
// arr.splice(-1)
// console.log(arr)
// arr.splice(1,2)
// console.log(arr);

// arr =['a','b','c','d','e']
// const arr2 = ['j','i','h','g','j']
// console.log(arr2.reverse())
// console.log(arr2)

// const letters = arr.concat(arr2)
// console.log(letters)
// console.log([...arr, ...arr2])

// console.log(letters.join)

// const arr = [23, 11, 64]
// console.log(arr[0])
// console.log(arr.at(0))

// console.log(arr[arr.length - 1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))

// console.log('jonas'.at(0))
// console.log('jonas'.at(-1))

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----FOREACH----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, Map) {
//   console.log(`${key}:${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${value}:${value}`);
// });

// const checkDogs = function(dogsJulia, dogsKate){
//   const dogsJuliaCorretcted = dogsJulia.slice()
//   dogsJuliaCorretcted.splice(0,1)
//   dogsJuliaCorretcted.splice(-2)

// // dogsJulia.slice(1,3)
// const dogs = dogsJuliaCorretcted.concat(dogsKate)
// console.log(dogs)
//   // console.log(dogsJuliaCorretcted)

//   dogs.forEach(function(dog,i){
//     if(dog >= 3){
//       console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
//     }else{
//       console.log(`Dog number ${i+1} is still a puppy`)
//     }
//   })
// }
// checkDogs([3,5,2,12,7,[4,1,15,8,3]])

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//     mov
//   )}`;

//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// console.log(movementsDescriptions);
