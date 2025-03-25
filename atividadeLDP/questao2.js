
//Bruna Santana Fontes - 25114270092//
 //Questão 2//

 const prompt = require ('prompt-sync') ({sigint: true});

 var n1 = parseFloat(prompt("Digite o primeiro número: "));
 var n2 = parseFloat(prompt("Digite o segundo número: "));
 var n3 = prompt("Digite o terceiro número: ");
 n3 = parseFloat(n3);
 
 var soma = n1 + n2 + n3
 var medArit = soma/3
 if(n1 >=0 && n1<=100 && n2>=0 && n2<=100 && n3>=0 && n3<=100) {
    console.log(`A media aritimedica entre os numeros
    ${n1}, ${n2}, e ${n3} é ${medArit}.`)
 } else {
    console.log(`Todos os numeros devem estar no intervalo [0,100] .`)
 }
 