//Bruna Santana Fontes - 25114270092//
 //Questão 3//
const prompt = require ('prompt-sync') ({sigint: true});

var n1 = 8;
var n2 = 7
var n3 = 10

var p1 = 0
var p2 = 1
var p3 = 0

var somaPesos = p1 + p2 + p3;
var mediaPonderada = (n1 * p1 + n2 * p2 + n3 * p3) / somaPesos;

console.log("A média poderada é", mediaPonderada);
