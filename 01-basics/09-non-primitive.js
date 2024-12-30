//non primitive = array, object

let username ={}
console.log(username)
console.log(typeof username)

let username1 = { "name1" : "jiya" ,
    isloggedin: true 
} //more easy and good way to write 

//array
let anotherusername = ["jiya",true]
console.log(anotherusername[0])

 //type conversion 
 //explicit
let isvalue = true //javascript consider true as 1 and false as 0
 console.log(isvalue + 1); //this will give us 2, this is done by lang java 
//implicit
console.log(Number(isvalue) + 1)// will change isvalue to number this is done by user
console.log(Number(null))//will convert null to 0
console.log(Number(undefined))//will convert undefined to 