// 명언들 배열로 저장
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other p",
    author: "John Lennon",
  },
  {
    quote: "The world is a book and those who do not travel read only",
    author: "Saint Augustine",
  },
  {
    quote: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quote: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other p",
    author: "John Lennon",
  },
  {
    quote: "The world is a book and those who do not travel read only",
    author: "Saint Augustine",
  },
];

// id가 quote인 element의 span 첫번째
const quote = document.querySelector("#quote span:first-child");
// id가 quote인 element의 span 마지막
const author = document.querySelector("#quote span:last-child");

// Math.random() : 0~1 곱하기 quotes.length : 10
// 0~9 중 하나 랜덤하게 todaysQuote에 저장, quotes[0~9]
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 배열 안에 객체 형태로 저장되어있으므로 .quote, author로 불러옴
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
