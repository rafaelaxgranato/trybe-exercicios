// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maior (a, b) {
    if (a > b) {
        console.log(a, " é maior que ", b);
    }
    else {
        console.log(b, " é maior que ", a);
    }
}
maior(2,10);