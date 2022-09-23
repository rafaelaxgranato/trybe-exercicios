let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index1 = 1; index1 < numbers.length; index1 += 1) {
    for (let index2 = 0; index2 < index1; index2 += 1) {
        if (numbers[index1] < numbers[index2]) {
            let posicao = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = posicao;
        }
    }
}
console.log(numbers);
for (let index1 = 1; index1 < numbers.length; index1 += 1) {
    for (let index2 = 0; index2 < index1; index2 += 1) {
        if (numbers[index1] > numbers[index2]) {
            let posicao = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = posicao;
        }
    }
}
console.log(numbers);
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (index +1 < numbers.length) {
        array.push(numbers[index] * numbers[index +1]);
    }
    else {
        array.push(numbers[index] * 2);
    }
}
console.log(array);