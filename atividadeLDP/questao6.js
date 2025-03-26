//Bruna Santana Fontes - 25114270092//
 //Questão 6//
 const prompt = require ('prompt-sync') ({sigint: true});

 var n1 = prompt("Digite o primeiro número: ");
 if  (n1 < 0){
  console.log("Número invalido")
 } else {
//i//
n1 = parseInt(n1)
//ii//
if (n1 %3 == 0) {
 console.log("O número é múltiplo de 3") 
} else {
console.log("O número não é múltiplo de 3")
 }
 }