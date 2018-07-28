//objects- accessing objects values
const car = {
    wheels: 5,
    color: "blue"
}


//Partner Exercise 1
var user = {
    name: "Aaron",
    email: "amhayslip@gmail.com"
} 
user.name == "Aaron";


//Partner Exercise 2

var user = {
    name: "Aaron",
    email: "amhayslip@gmail.com",
    family: ["Sarah", "Isaiah"],
    speak: function() {
        console.log("Hey! I'm Aaron!");
    }
}
user.name === "Aaron";
user.email === "amhayslip@gmail.com";
user.family;
user.speak;


//Partner Exercise 3
user.family.push("Eric");
user.family;



//setting objects properties and values
//Partner Exercise 4 + 5 + 6

const person = {}
person.firstName = "Sigal";
person.lastName = "Shalit Manor";
person.greet = function() {
    console.log("Hey there!");
}
person.greet();



//nested objects
var user1 = {
    name: "Aaron",
    addresses: {
        home: "12345 Hebrew Street",
        work: "35 Ahad Ha'am"
    }
}
user1.addresses.home;


//Partner Exercise 7 + 8
const yourProfile = {
    eyes: "green",
    nose: "long",
    hair: {
        length: "short",
        color: "black",
        type: "curly"
    }
}
yourProfile.hairColor = function(hairColor) {
    console.log(`Your hair color is ${hairColor} ?`);
}
yourProfile.hairColor(yourProfile.hair.color);


//claimReservation exercise
/*
var reservations = {
    'Bob': { claimed: false },
    'Ted': { claimed: true }
  }
  
  var name = prompt('Please enter the name for your reservation');
  
  var claimReservation = function (name) {
    for (let key in reservations) {
        if (name === key && reservations[key].claimed === true) {
            alert("welcome!");
            return;
        } else if (name === key && reservations[key].claimed === false) {
            alert("your reservation exist, but was already claimed");
            return;
        } 
    } 
    alert("there is nothing under your name");
    reservations[name] = { claimed: true };
    alert("we added your new reservation");
}

claimReservation(name);
*/





