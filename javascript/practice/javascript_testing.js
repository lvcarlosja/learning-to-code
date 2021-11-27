// This is a Comment
// Below is some practice code demoing the console.log method
console.log("Hello world!")

/*(for(var i=0; i<10; i++)
{
	console.log("Hello world!", i)
}
*/
// These are examples of strings
console.log("Knock, knock!")
console.log("Who's there?")
console.log("World.")
console.log("Hello,world")


// These are examples of the number data type
console.log(5)

// Now, let's add
console.log(4 + 4)

// Let's subtract
console.log(14 - 3)
// Let's multiply
console.log(9 * 3)

// Let's divide
console.log(7 / 3)

// Let's mod
console.log(8 % 8)

// Order of operations
console.log(8 * 2 + 5)

// with parantheses
console.log(8 * (2 + 5))

// negative numbers
console.log(-2 * 5)

console.log(5.5 + 2.7)

// double quotes, single quotes, back ticks
console.log("como se dice hello, world!")
console.log('you are invited to the pants party'.length)
console.log(`are you saying there's a party in your pants and i am invited`.length + 100)

// Solve for X
// x + 2 = 7

// let is a javascript keyword that allows the programmer
// to create a variable and store the value of that variable
// so it can be used anywhere in the program
let hashTag = "#####"
// ##### is the value we want to assign to "hashTag"

for(var i=0; i<5; i++)
{
	console.log("These are hash tags: " + hashTag)
}

hashTag = "I've assigned another value to hashTag"

console.log(hashTag)

let name ="Oliver The Newfypoo"
let puppyName = name

console.log(puppyName)

"This is a string literal"

42; // this is a number literal

let favoriteFood = "ice cream" // this is an example of a statement
let secondFavorite = "tacos"

console.log(favoriteFood) // this is a variable expression

/* variable expression*/ 
favoriteFood = secondFavorite; // this statement consists of expressions
console.log(favoriteFood)


// if...else statement practice
let nightTime = true
let sunUp = false
console.log(nightTime)

if(sunUp)
{
	console.log("It is not time for bed.")
}
else
{
	console.log("It is time for bed.")
}

let weHaveEggs = true;
let weHaveBacon = false

if(weHaveBacon)
{
	console.log("Let's make bacon.")
}
else
{
	console.log("Let's make an omelet.")
}

let a = 4
let b = 7

if(a >= b)
{
	console.log("A is equal to B.")
}
else
{
	console.log("These are not equal.")
}


// weather today
let temp = 80
/* this is undefined*/ let jacket

if(temp > 70)
{
	jacket = "no jacket"
}
else if(temp > 50)
{
	jacket = "light jacket"
}
	else
	{
		jacket = "heavy jacket"
	}

console.log(jacket);

// AND = &&
// OR = ||
// NOT = !

let pretzelsInStock = false
let amountOfChange = 2.00

//Logic AND
if(pretzelsInStock && amountOfChange >= 1.50)
{
	console.log("Buy Pretzels.")
}
else
{
	console.log("I can't buy pretzels.")
}

// Logic Or

let rainy = true
let excitingMovie = true
let money = 3.00

if((rainy || excitingMovie) && money >= 4.00)
{
	console.log("I will go to the movies.")
}
else
{
	console.log("I will go to the park.")
}

let windy = false

if(!windy)
{
	console.log("I will go for a run.")
}
else
{
	console.log("I will fly a kite.")
}

let python = "Fira"
let pug = "Cody"
let bunny = "Oliver"

// function is telling javascript that a function is going to follow
// the name of the function comes after function
// After the name of the function, you insert a parameter between the parantheses
function magnificent(critterName)
{/* everything inside the curly bracesis part of the function*/
	console.log(critterName + " the Magnificent")
}

// below we are invoking the magnificent function defined above
magnificent(python)
magnificent(pug)
magnificent(bunny)

//more functions but with parameters!

function sum(num1, num2)
{
	return num1 + num2
}

//invoke sum
let mySum = sum(3, 5)
let sum2 = sum(9, mySum)
console.log(mySum)
console.log(sum2)

let codyName = "Cody"
let codyAge = 7

let oliverName = "Oliver"
let oliverAge = 0.5

let codyObj = {
	name: "Cody",
	age: 7,
	owner: "Carlos",
	address: "1600 Pennsylvania Avenue",
	bark: function() {
		return "Bark! Bark!"
	}
	// friend:
			// name1: "Oliver",
			// name2: "Carlos"
		// }
	
}

console.log("You got: " + codyObj.bark())

console.log(codyObj.address)
console.log(codyObj.owner)

console.log(oliverName + " is age " + oliverAge)




