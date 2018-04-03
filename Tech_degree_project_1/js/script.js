
// quotes to display on screen
var quotes = [

 {
 	quote:"Learn something about everything and everything about something.",
 	source:"Thomas Huxley",
 	citation:"BrainyQuote",
 	year: 1902
 	

 },
{
 	quote:"Two roads diverged in a wood and I - I took the one less travelled by, And that has made all the difference.",
 	source:"Robert Frost"
 	

 },

{
 	quote:"Everything should be made as simple as possible ... but not simpler.",
 	source:"Albert Einstein"
 	

 },

{
 	quote:"If you're good to your staff when things are going well, they'll rally when times go bad",
 	source:"Mary Kay Ash"
 	

 },

{
 	quote:"Ask not what your country can do for you, ask what you can do for your country.",
 	source:"JFK"
 	

 }


];

// function to print html to page
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
};

// selects and returns random quote object
function getRandomQuote(){
 var randomNumber = Math.floor(Math.random()*quotes.length);
 return quotes[randomNumber];
 
};

// function to define what is to be printed on the html page
// the quote, source, and optional citation and year are stored in var string
function printQuote(){

  var selection = getRandomQuote();
   
  
  string = '<p class="quote">' + selection.quote + '</p>';
  string += '<p class="source">' + selection.source;
  if ( selection.citation ) {
		string += '<span class="citation">' + selection.citation + '</span>';
	} else {
		string += '';
	}
	if (selection.year) {
		string += '<span class="year">' + selection.year + '</span></p>';	
	} else {
		string += '';
	}
	
	
   
  print(string);

};

// calls printQuote function when clicked
// displays random quote on screen
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// random quote displayed when page first loaded
window.onload("load",printQuote());




