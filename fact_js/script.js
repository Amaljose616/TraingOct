function fact(num) {
  if (num <= 0) return 1

  return (num = num * fact(num - 1))
}

console.log(fact(3))
