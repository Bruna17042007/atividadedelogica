//Bruna Santana Fontes - 25114270092//
 //Questão 8//
 const prompt = require ('prompt-sync') ({sigint: true});
 
 var anodenascimento = prompt("Digite um ano: ");
 var primeirojogo = 1896
 var anoolimpic = (anodenascimento - primeirojogo) 
 if (anodenascimento < 1890 ||anodenascimento > 2025) {
  console.log("Ano inválido")
 }
  if (anoolimpic %4 == 0) {
console.log("O usuário nasceu em ano de Jogos Olímpicos ")
 } else {
  console.log("O usuário não nasceu em ano de Jogos Olímpicos ")
 }
