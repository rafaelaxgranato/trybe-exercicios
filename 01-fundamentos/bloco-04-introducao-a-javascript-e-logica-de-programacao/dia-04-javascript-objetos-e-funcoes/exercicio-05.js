// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

function triangulo(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b + c == 180) {
            return "true";
        }
        else {
            return "false";
        }
    }
    else {
        return "erro";
    }
}
console.log(triangulo(60, 50, 10));
