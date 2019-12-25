/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array contains object with the following keys:
 * quote
 * source
 * citation (optional)
 * year (optinal)
 * profession (optinal)
***/
var quotes = [
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    profession: "actress"
  },

  {
    quote: "Here's Johnny!",
    source: "The Shining",
    citation: "movie",
    year: "1980"
  },
  {
    quote: "My precious",
    source: "The Lord of the Rings: Two Towers",
    citation: "movie",
    year: "2002"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde", 
    profession: "writer"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    profession: "physicist"
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    source: "William W. Purkey",
    profession: "writer"
  }
];




/***
 * `getRandomQuote` function
 * returns a array element of quotes
 * The random number is between 0 and the length -1 of the quotes
***/
function getRandomQuote(){
  var random = Math.floor(Math.random() * (quotes.length)); 
  return quotes[random];
}


/*** 
 * `random_bg_color` function
 * set random background color
 * Ressource: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
 ***/
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}


/***
 * `printQuote` function
 * Prints a random quote in the div with the id "quote-box"
 * HTML template:
 * <p class="quote"> [quote here] </p>
 * <p class="source"> [source here]
 * <span class="citation"> [citation here] </span>
 * <span class="year"> [year here] </span></p>
 * <span class='profession'>" + quote.profession + "</span>"
***/
function printQuote(){
  var quote = getRandomQuote();
  var quoteMessage = "<p class='quote'>" + quote.quote + "</p>";
  quoteMessage += "<p class='source'>" + quote.source;

  if(quote.citation){
    quoteMessage += "<span class='citation'>" + quote.citation + "</span>";
  }

  if(quote.year){
    quoteMessage += "<span class='year'>" + quote.year + "</span>";
  }

  if(quote.profession){
    quoteMessage += "<span class='profession'>" + quote.profession + "</span>";
  }

  quoteMessage += "</p>";

  var div = document.getElementById('quote-box');
  div.innerHTML = quoteMessage;
  random_bg_color();
}

/***
 * Prints a quote when the page is loaded & changes the quote every 20s
 * Ressource: https://www.w3schools.com/jsref/met_win_setinterval.asp
 ***/
printQuote();
setInterval(printQuote, 20000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);