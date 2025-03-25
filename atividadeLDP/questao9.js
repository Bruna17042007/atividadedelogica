//Bruna Santana Fontes - 25114270092//
 //Questão 9//
 const prompt = require ('prompt-sync') ({sigint: true});

 var n1 = 8;
 var n2 = 7
 var n3 = 10
 
 var p1 = 3
 var p2 = 3
 var p3 = 4
 
var somaPesos = p1 + p2 + p3;
var mediaPonderada = (n1 * p1 + n2 * p2 + n3 * p3) / somaPesos;

 console.log("A nota final do estudante é", mediaPonderada); 
 if (mediaPonderada < 5){
  console.log("O estudante foi reprovado")
 } else if (mediaPonderada >=5) {
 console.log("O estudante foi aprovado")
 }
 