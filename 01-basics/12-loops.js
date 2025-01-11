let sum = 0
let i = 1
while (i <= 5) {
    sum+= i //sum = sum+1
    i++
}
console.log(sum)

let countdown = []
let j = 5
while (j > 0){
    countdown.push(j)
    j--
}
console.log(countdown)

/*let teacollections=[]
let tea 
do {
   tea = prompt("enter the name of the tea(type 'stop' to finish")

    if (tea !== "stop") {
        teacollections.push(tea)
    }
} while (tea !== "stop");*/ //this works on chrome or web

let total = 0 
let k = 1
do {
    total += k
    k++
} while (k <= 3);

let teas = ["green tea","black tea","ice tea","chai","tandoori chai"]
let selectedtea = []
 
for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
      break  
    }
    selectedtea.push(teas[i])
}
console.log(selectedtea)

let cities = ["london", "new york", "paris" , "berlin"]
let visitedcities = []

for (let i = 0; i < cities.length; i++) {
    if(cities[i] == "paris") {
        continue
    }
 visitedcities.push(cities[i])
}
console.log(visitedcities)

let numbers = [1,2,3,4,6,7]
let smallnumbers = []

for (const num of numbers) {
    if(num === 4 ) {
        break
    }
    smallnumbers.push(num)
}
console.log(smallnumbers)

let citiespopulation = {
    "london": 89000,
    "new york":84000,
    "paris": 50000,
    "berlin":35000
} 
let citynewpopulation = {}

for (const city in citiespopulation) {
    if (city == "berlin") {
        break
    }
//key=value
citynewpopulation[city]=citiespopulation[city]
}
console.log(citynewpopulation)

let worldCities = {
    sydne: 5000000,
    tokyo: 9000000,
    berlin: 2000000,
    paris: 2200000,
}

let largecities = {}

for (const city in worldCities) {
    if (worldCities[city]<3000000) {
        continue
    }
    largecities[city] = worldCities[city]
}
console.log(largecities)


