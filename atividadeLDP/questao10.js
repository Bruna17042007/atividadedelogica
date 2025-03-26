//Bruna Santana Fontes - 25114270092//
 //Questão 10//
 const prompt = require ('prompt-sync') ({sigint: true});

 //Escreva um algoritmo que receba um número introduzido pelo usuário exiba ao usuário se é positivo, negativo ou zero//
 
 var n1 = prompt("Digite o primeiro número: ");
 if (n1 > 0) {
  console.log("O número é positivo")
 } else { console.log("O número é negativo") }
 if (n1 == 0) {
  console.log("O número é zero")
 }