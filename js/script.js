/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
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
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    source: "William W. Purkey",
  }
];




/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  var random = Math.floor(Math.random() * (quotes.length)); 
   return quotes[random];
  }

/***
 * `printQuote` function
 * <p class="quote"> [quote here] </p>
 * <p class="source"> [source here]
 * <span class="citation"> [citation here] </span>
 * <span class="year"> [year here] </span></p>
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

  quoteMessage += "</p>";

  var div = document.getElementById('quote-box');
  div.innerHTML = quoteMessage;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);