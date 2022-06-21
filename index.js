let names = ['Elsi', 'Eno', 'Nico', 'Leo', 'Reli']
let list = 35



function greetEveryone() {
  for (let name of names) greet(name)
}



function saluteEveryone() {
  for (let name of names) {
    salute(name)
  }
}



function greet(name = 'stranger') {
  let message = `Hello, ${name}!!!`
  console.log(message)
  return message
}



function salute(name = 'stranger') {
  let message = `Goodbye, ${name}!!!`
  console.log(message)
}



function doSomething() {
  console.log(list)
}




function sum(a = 0, b = 0) {
  return a + b
}



greetEveryone()

saluteEveryone()