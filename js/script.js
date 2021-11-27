//console.log('Hello Console.')

//Arrow function
let arrFun = (a, b) => {
  return (a + b) * 5
}

//Function
function classicFin(text_user) {
  console.log(`Hello ${text_user}`)
}

//Object
const user_0 = {
  name: 'Alex',
  age: 23,
  job: false,
  adress: {
    town: 'London',
    numberHouse: 13,
  },
  hasFamily: true,
  compositionFamily: [
    (sister = { name: 'Sally', age: 26 }),
    (mother = { name: 'Go', age: 54, job: true }),
    (brother = { name: 'Sally', age: 15 }),
  ],
}

const user_1 = {
  status: 'working',
  port: 2300,
}

const user_2 = {
  town: 'Paris',
  age: 78,
}

const user_3 = {
  hasFamily: true,
  colorSholders: 'white',
}

//Array
let allObj = [user_1, user_2, user_3]

const user_4 = {
  job: false,
  ageSister: 43,
}

allObj.splice(1, 0, user_4)

let arr_1 = allObj.slice(0, 2)

console.log(allObj.includes(user_3, 0))

//Classes
class Info {
  constructor(name, age, colorSholders) {
    this.name = name
    this.age = age
    this.colorSholders = colorSholders
  }
}
let userInfo = new Info('Alex', 17, 'lightgrey')
console.log(userInfo)

class Group {
  constructor(course, members) {
    this.course = course
    this.members = members
  }
}
const gr_4B = new Group(4, 24)
console.log(gr_4B)

//EventLoop
setTimeout(() => {
  console.log('Hello JS.')
}, 2000)

setTimeout((a = 5, b = 67) => {
  console.log(b - a)
}, 3000)

//DOM
const container_main = document.querySelector('.container_main')
