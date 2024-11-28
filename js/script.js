/*** 
  QUOTES ARRAY 
***/

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "White House Reception",
    year: 1998,
    tag: "politics"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation: "Interview",
    year: 1957,
    tag: "business"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "Inaugural Speech",
    year: 1933,
    tag: "politics"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "Sermon",
    year: 1957,
    tag: "politics"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Hellen Keller",
    citation: "Letter",
    year: 1891,
    tag: "politics"
  },
  {
    quote: "The purpose of art is washing the dust of daily life off our souls.",
    source: "Pablo Picassp",
    citation: "Essay",
    year: 1961,
    tag: "art"
  }
];


/***
  GET RANDOM QUOTE FUNCTION
***/

function getRandomQuote (array) {
  let i = Math.floor(Math.random() * array.length);
  return array[i];
};


/***
  PRINT QUOTE FUNCION
***/

function printQuote () {
  let selQuote = getRandomQuote(quotes);
  let properties = "";
  properties = 
  `<p class="quote">${selQuote.quote}</p>
  <p class="source">${selQuote.source}<span class="citation">${selQuote.citation}</span><span class="year">${selQuote.year}</span><span class="tag">${selQuote.tag}</span>
  </p>`;
  document.getElementById('quote-box').innerHTML = properties;

  /*** CODE THAT CHANGES BG COLOR EVERY TIME PRINT QUOTE IS CALLED - FROM: https://css-tricks.com/snippets/javascript/random-hex-color/ ***/
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

/***
  SET INTERVAL THAT CALLS "PRINT QUOTE" EVERY 20 SEC
***/

setInterval(printQuote, 20000);

/***
  ADD EVENT LISTENER
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);