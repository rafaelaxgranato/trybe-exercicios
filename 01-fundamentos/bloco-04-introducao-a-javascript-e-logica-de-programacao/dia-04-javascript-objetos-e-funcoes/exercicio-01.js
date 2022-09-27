// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma (a, b) {
    resultado = a + b;
    return resultado;    
}
console.log(soma(3, 6));

function subtracao (a, b) {
    resultado = a - b;
    return resultado;    
}
console.log(subtracao(9, 2));

function multiplicacao (a, b) {
    resultado = a * b;
    return resultado;
}
console.log(multiplicacao(2, 6));

function divisao(a, b) {
    resultado = a / b;
    return resultado;    
}
console.log(divisao(8, 3));

function modulo(a, b) {
    resultado = a % b;
    return resultado;
}
console.log(modulo(7, 2));