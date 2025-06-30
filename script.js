const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  {text: "Sometimes Journey is Beautiful than Destination.", author: "Muhammad Talha"},
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
  
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = `"${quotes[random].text}"`;
  document.getElementById('author').textContent = `— ${quotes[random].author}`;
}
