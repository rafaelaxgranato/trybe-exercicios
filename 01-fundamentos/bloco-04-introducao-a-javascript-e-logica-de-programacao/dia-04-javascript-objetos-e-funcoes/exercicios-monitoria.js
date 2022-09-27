// function split(sentence) {
//     let frase = sentence.split(" ");
//     return frase;
// }
// console.log(split("Washington é o melhor summer, fácil!"));


// function triangulo(a, b, c) {
//     let verdadeira = true;
//     if (a > 0 && b > 0 && c > 0) {
//         if (a + b + c == 180) {
//             return verdadeira;
//         }
//         else {
//             return !verdadeira;
//         }
//     }
//     else {
//         return "erro"
//     }  
// }
// console.log(triangulo(30, 10, 90));

// function conditional(cond1, cond2, cond3) {
//     if (cond1 > cond2 && cond1 > cond3 ) {
//         return true;
//     }
//     else {
//         return false;
//     }
    
// }
// console.log(conditional(17,6,10));

// let array = ['ximbalaie', 'gersinei', '123', 'otorrinolaringologista', 'oi'];
// let maior = array[0];
// let menor = array[0];

// function maiores(array) {
//     for (let index = 1; index < array.length; index += 1) {
//         if (array[index].length > maior.length) {
//             maior = array[index];
//         }
//     }
//     return maior;
//  }

// function menores(array) {
//     for (let index = 1; index < array.length; index += 1) {
//         if (array[index].length < menor.length) {
//             menor = array[index];
//         }
//     }
//     return menor;
// }
//  console.log(maiores(array));
//  console.log(menores(array));

function frase (array) {
    let soma = ''
    for (let index = 0; index < array.length; index += 1) {
        soma += array[index] + ' ';
    }
    return soma;
}
console.log(frase(['Turma', '27', '-', 'B']));