const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote:
      "Programming is the art of algorithm design and the craft of debugging errant code.",
    author: "Ellen Ullman",
  },
  {
    quote:
      "Everybody should learn to program a computer because it teaches you how to think.",
    author: "Steve Jobs",
  },
  {
    quote: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
