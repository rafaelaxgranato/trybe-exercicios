let valor = 31;
let resultado = 0;
for (let numero = 2; numero <= valor; numero += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor == 0) {
            primo = false;
        }
    }
    if (primo) {
        resultado = valor
        console.log("É primo")
    }
}