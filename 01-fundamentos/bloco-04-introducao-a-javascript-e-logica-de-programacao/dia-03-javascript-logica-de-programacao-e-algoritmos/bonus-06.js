let valor = 13;
let contador = 1;
for (let divisor = 2; divisor <= valor; divisor += 1) {
    if (valor % divisor == 0) {
        contador += 1;
    }
}
if (contador === 2) {
    console.log("É primo");
}
else {
    console.log("Não é primo");
}