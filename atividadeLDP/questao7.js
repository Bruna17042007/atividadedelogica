//Bruna Santana Fontes - 25114270092//
 //Questão 7//
 const prompt = require ('prompt-sync') ({sigint: true});

 
 var n1 = prompt("Digite um ano: ");
 var anodenascimento = n1
 var primeiracopa = 1930
 var anocopa = (anodenascimento - primeiracopa) 
 if (n1 < 1970 ||n1 > 2025) {
  console.log("Ano inválido")
 }
  if (anocopa %4 == 0) {
console.log("O usuário nasceu em ano de copa")
 } else {
  console.log("O usuário não nasceu em ano de copa")
 }
