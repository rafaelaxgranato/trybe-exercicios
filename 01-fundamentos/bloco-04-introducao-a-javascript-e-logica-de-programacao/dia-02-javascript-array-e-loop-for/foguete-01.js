let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
let soma = 0;
for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];  
}
console.log(soma);
let media = soma / (numbers.length)
console.log(media);
if (media > 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}
let maior = numbers[0];
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
}
console.log(maior);
let impares = 0;
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        impares += 1;
    }
}
console.log(impares);
if (impares == 0) {
    console.log("nenhum valor ímpar encontrado");
}
let menor = numbers[0];
for (index = 0; index < numbers.length; index +=1) {
    if (menor > numbers[index]) {
        menor = numbers[index];
    }
}
console.log(menor);
let array = [];
for (index = 1; index < 26; index += 1) {
    array.push(index);    
}
console.log(array);
let arrayDivisao = [];
for (index = 0; index < array.length; index += 1) {
    let divisao = array[index] / 2;
    arrayDivisao.push(divisao);
}
console.log(arrayDivisao);