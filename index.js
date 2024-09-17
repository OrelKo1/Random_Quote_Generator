import quotes_data from './quotes.js'

let quotes_available = [...quotes_data];
const quoteTag = document.getElementById("quote");


window.generateQuote = function () {
    if (quotes_available.length === 0) {
        quotes_available = [...quotes_data];
    }
    let RandomIdx = Math.floor(Math.random() * quotes_available.length);
    quoteTag.innerHTML = quotes_available[RandomIdx];
    quotes_available.splice(RandomIdx,1);
}