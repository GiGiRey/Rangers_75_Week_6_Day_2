//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printPerson(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        if(Array.isArray(Object.values(person3)[i])){
            console.log(Object.keys(person3)[i],Object.values(person3)[i])
        }else{
            console.log(Object.keys(person3)[i])
        }
    }
}

printPerson()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name,age){
    this.name = name;
    this.age = age;

    // A Method inside of a JS Prototype
    this.printInfo = function(){
        
        console.log(`${this.name} is ${this.age} years old.`);
        let age = this.age += 1;
    }
}

// Creating an instance of a prototype
let my_person = new Person('Keller', 13)
let my_person2 = new Person('Drew', 14)

// Call our prototype method
my_person.printInfo()
my_person.printInfo()
my_person.printInfo()
my_person.printInfo()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
    

const isGreaterThanTen = (a_string) => {
    return new Promise( (resolve,reject) => {
        if(a_string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using a JS Promise
isGreaterThanTen('bob')
//Happy resolver path
.then( (result) => {
    console.log("Big word")
})
//Sad Reject path
.catch( (error) => {
    console.log("Small Number")
})

//code wars #1: Convert a Number to a String

function numberToString(num) {
    let string = num.toString()
      return string
}

console.log(numberToString(67))

//code wars #2

function row_sum_odd_numbers(n){
    
    return Math.pow(n,3)
}

console.log(row_sum_odd_numbers(19))


//code wars #3: Cockroach Speed

function cockroachSpeed(s){

    return Math.floor(s * 100000 / 60 / 60)

}

console.log(cockroachSpeed(1.09))
