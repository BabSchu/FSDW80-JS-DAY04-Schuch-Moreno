/*Intermediate
Intermediate exercise 1 | Hotels

Create three objects of type hotel. Each of them shares some properties and methods. 
The user should be able to insert a number of nights for each hotel and get back results, 
whether the hotel is available or not (for some number of nights). For each hotel generate 
random integers from 1-10 that store available nights. If the hotel is available, 
provide a button labeled "I'll reserve" otherwise provide a message with 
text "Sorry, no free room for <number_of_nights> nights".

Try to style the program with the colors #003580, #FFFFFF and #E9F0FA.*/

var c = Math.floor((Math.random() * 10) + 1);

function HotelConstructor (name) {

	this.name = name;

	this.mes = function (){
		this.nights = document.getElementById("numberOfNights").value;
		this.avaiNights = c;
		var result = this.avaiNights - Number(this.nights);

		if ( result <= 0){
			document.getElementById("messagetext").innerHTML = "Sorry, no free room for the requested nights";
		}

		else {
			document.getElementById("messagetext").innerHTML = "I'll reserve";
		}
	}
}

var boutiqueHotel = new HotelConstructor ("Leonardo");


/*function showMesTex() {
	document.getElementById("messagetext").style.display="block";
}*/

function showMes() {

	var element = document.getElementById("mess");
  	element.classList.add("message");
}

var clickbutton = document.getElementById("button");
clickbutton.addEventListener("click", showMes);
clickbutton.addEventListener("click", boutiqueHotel.mes);

/*this will NOT work, because you can´t attach two funtions to one event (in our case the onclick on the button)
with the the traditional DOM event handler or html event handler you need the DOM 2 handler aka eventlistener*/

//document.getElementById("button").onclick = document.getElementById("mess").classList.toggle("message");
//document.getElementById("button").onclick = showMes();
//document.getElementById("button").onclick = showMesTex();


//document.getElementById("button").onclick = boutiqueHotel.mes;


