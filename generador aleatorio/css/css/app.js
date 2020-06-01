// Generador aleatorio

var max = 100 , min = 0;
var range = max - min + 1 

var randomPick = (n, min ,max) => Math.floor(Math.random() * range) + min;

console.log(randomPick(1, 0, 30))