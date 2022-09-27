// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maior(a, b, c) {
    if (a > b && a > c) {
        console.log(a, " é maior que ", b, " e ", c);
    }
    else if (b > c) {
        console.log(b, " é maior que ", a, " e ", c);
    }
    else {
        console.log(c, " é maior que ", a, " e ", b);
    }
}
maior(9, 17, 2)