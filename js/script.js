//console.log('Hello Console.')

//Arrow function
let arrFun = (a, b) => {
  console.log((a + b) * 5)
}
arrFun(2, 3)

//Function
function classicFin(text_user) {
  console.log(`Hello ${text_user}.`)
}
classicFin('web')

let num_0 = 876
const num_1 = 456
function fun_0(num_2 = 1) {
  if (num_0 > num_1) {
    console.log(`${num_0}, it's first number.`)
  } else if (`Numbers ${num_0} and ${num_1} are equal`) {
    console.log(true)
  } else {
    console.log(num_1 - num_2)
  }
}
fun_0(376)

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
    (mother = { name: 'Gloria', age: 54, job: true }),
    (brother = { name: 'Sam', age: 15 }),
  ],
}
console.log(user_0.adress.numberHouse.toString())
console.log(user_0.compositionFamily[1])

//Array
const user_1 = {
  statusLife: 'died',
  yearDied: 2018,
}

const user_2 = {
  town: 'Paris',
  age: 78,
}

const user_3 = {
  hasFamily: true,
  colorSholders: 'white',
}

let allObj = [user_1, user_2, user_3]
const numArr = [1, 0, 5, 78, 65, 456, 361, 9041, 34]

const user_4 = {
  job: false,
  ageSister: 43,
}

allObj.splice(1, 0, user_4)

let arr_1 = allObj.slice(0, 2)

console.log(allObj.includes(user_3, 0))

//Classes
class InfoUser {
  constructor(name, age, colorSholders) {
    this.name = name
    this.age = age
    this.colorSholders = colorSholders
  }
}
let student = new InfoUser('Alex', 17, 'lightgrey')
console.log(student)

class InfoGroup {
  constructor(course, group_members) {
    this.course = course
    this.members = group_members
  }
}
const gr_4B = new InfoGroup(4, 24)
console.log(gr_4B)

//EventLoop
const js_str = 'JS'
setTimeout(() => {
  console.log(`Hello ${js_str}.`)
}, 2000)

setTimeout((myYear = 20) => {
  let yearBirth = 2021 - myYear
  console.log(`I'm born in ${yearBirth}.`)
}, 3000)

//DOM
const container_main = document.querySelector('.container_main')
