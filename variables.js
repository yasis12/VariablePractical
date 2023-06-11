console.log( 'js' );

let testVar = 9;

console.log(testVar);

console.log( 'the value of testVar is', testVar);

testVar = 1234

console.log( 'the value of testVar is', testVar);

let stringVar = "I like " + "cats"; // if it is a string it joins

let plants = 12; //what are ways to add plants to plants variable

plants = plants + 3;

plants += 1; //add value

plants -= 1; //subract value

//palnts ++; //increment

console.log(plants);

// string Variables

let catName = 'Nala';

console.log(catName);

console.log('The name of the cat is:', catName);

let sentance = 'This is a sentence about a cat named ' + catName; //need to add space
console.log(sentance);

let catAge = 10

sentance = 'The cat is ' + catAge + ' years old.' + catName + ' is the name of the cat';

let seatsInCar = 4;
let passengers = 2;
let infants = 1;
let infantSeats = 0;
let fullTank = true;

if (seatsInCar >= passengers && infantSeats >= infants) {
    console.log( 'Ready for the road trip' );
    if (fullTank) {
        console.log( 'Ready to hit the road!');
    } else {
        console.log('Must get gas before depature.');
    }
} else {
    console.log('Not ready for road trip. Check car, passengers, and equipment.');
}