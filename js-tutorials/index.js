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
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
});
