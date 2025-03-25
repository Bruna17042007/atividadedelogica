//Bruna Santana Fontes - 25114270092//
//Questão 1//
const prompt = require ('prompt-sync') ({sigint: true});

var n1 = 80;
var n2 = 56
var n3 = 25 
var soma = n1 + n2 + n3
var mediaArit = soma/3; 
console.log ("A média aritimética é",mediaArit) 
 //console.log("A media aritimedica é " + medArit);
 //console.log(` A media aritimedica entre os numeros ${n1}, ${n2}, ${n3} é ${medArit}.`)
 if(n1 >=0 && n1<=100 && n2>=0 && n2<=100 && n3>=0 && n3<=100){
  console.log(`A média aritimética entre os números 
    ${n1}, ${n2} e ${n3} é ${mediaArit}.`)
 }else{
  console.log(`Todos os números devem estar no intervalo {0,100}.`)
 }





 