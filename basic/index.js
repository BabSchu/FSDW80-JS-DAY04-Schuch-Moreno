/*Basic exercise 1 | Age

Create a function that uses your birth year as an argument 
and calculates your current age, use the Date object.*/


function myAge(birthYear) {

	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var age = currentYear - birthYear;
	document.write("You are " + age + " years old");

}

myAge(1984);

/*Basic exercise 2 | Truncate

Create a function that accepts two parameters. 1st parameter is a string and the 2nd is 
a number of characters that should be shortened by cutting off the string from left to right.
e.g. If we pass the following arguments in the function 1st argument = "I am a hero from World of Warcraft" 
nd 2nd argument = "12", we should get the string "I am a hero"*/

function cutHero (text,cutNum) {
	var finalSent = text.slice(0,cutNum);
	document.write("<br>" + finalSent);
}

cutHero("I am a hero from World of Warcraft",12);

/*Basic exercise 3 | Personal information

Write a function that will print your personal information - name, surname, age and short description 
using the return statement. Those values are defined as parameters to the function. 
All information should be passed as arguments, when the function is called.
Expected outcome: Hi I am John Doe I am 25 years old and I am a future programmer.*/

function personalInfo (name, surname, age, description) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.description = description;
	this.tellMe = function () {
		return "<br> Hi my name is " + this.name + " " + this.surname + " I am " + this.age + " years old and I am a " + this.description;
	}
	
}

var person1 = new personalInfo("John","Doe","25","future programmer");

document.write("I am " + person1.tellMe());

