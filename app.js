const prompt = require('prompt-sync')();
const franc = require('franc');
const userInput = prompt('Type a word or sentence and I will guess the language:')
console.log(franc(userInput))