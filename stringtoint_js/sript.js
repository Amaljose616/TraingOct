let x = "88"

function stringToInt() {
  let num = 0
  for (let i of x) {
    num = num * 10 + charToInt(i)
  }
  return num
}

function charToInt(x) {
  if (x === "0") return 0
  if (x === "1") return 1
  if (x === "2") return 2
  if (x === "3") return 3
  if (x === "4") return 4
  if (x === "5") return 5
  if (x === "6") return 6
  if (x === "7") return 7
  if (x === "8") return 8
  if (x === "9") return 9
  else return "string"
}

let y = stringToInt(x)

console.log("type is", typeof y)
