const calculator = {
  plus: function(a,b){
    return a + b;
  },
  minus: function(a,b){
    return a - b;
  },
  multi: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  },
  power: function(a,b){
    return a ** b;
  }
}

//console.log(greetKJ)
const a = 10
const b = 2
console.log(`a : ${a}, b : ${b}`)
const plus   = calculator.plus(a,b)
const minus  = calculator.minus(a,b)
const multi  = calculator.multi(a,b)
const divide = calculator.divide(a,b)
const power  = calculator.power(a,b)
console.log(`plus : ${plus}`)
console.log(`minus : ${minus}`)
console.log(`multi : ${multi}`)
console.log(`divide : ${divide}`)
console.log(`power : ${power}`)