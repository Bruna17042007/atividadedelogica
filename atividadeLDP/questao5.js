//Bruna Santana Fontes - 25114270092//
 //Questão 5//
 const prompt = require ('prompt-sync') ({sigint: true});

 var cor = prompt(" Digite uma cor dentre verde, amarelo, e vermelho: ")

//var cor = "verde";
//cor = "amarelo";
//cor = "vermelho";
//cor = "azul";
cor = cor.toLowerCase();
var acao = (cor  == "verde") ? "Siga!" :
((cor == "amarelo") ? "Atenção!" :
((cor == "vermelho" ) ? "Pare!" : "Cor inválida"));
console.log(acao)