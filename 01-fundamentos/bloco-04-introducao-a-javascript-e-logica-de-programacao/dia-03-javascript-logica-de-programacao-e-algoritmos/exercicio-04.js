let maior = 2;
for (let numero = 2; numero <= 50; numero += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor == 0) {
            primo = false;
        }
    }
    if (primo) {
        maior = numero;                
    }
}
console.log(maior);