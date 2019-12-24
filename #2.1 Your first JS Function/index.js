function sayHello(name, age){
  console.log('Hello!',name, "you have", age, "years of age.");
}
sayHello("Kyungjae", 15);
console.log("hi")


function sayHello2(name, age){
  console.log(`Hello ${name} you are ${age} years old`);
  return (`Hello ${name} you are ${age} years old`);
}
  sayHello2("Kyungjae", 20);
  const greetKJ = sayHello2("KJ", 15) //sayHello의 return값

  console.log(greetKJ)