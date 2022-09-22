let salarioBruto = 3000;
let impostoINSS;
let salarioBase;
if (salarioBruto <= 1156.94) {
    impostoINSS = 0.08;
    salarioBase = salarioBruto - (salarioBruto * impostoINSS);
}
else if (salarioBruto >= 1156.95 && salarioBruto <= 2594.92) {
    impostoINSS = 0.09;
    salarioBase = salarioBruto - (salarioBruto * impostoINSS);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    impostoINSS = .11;
    salarioBase = salarioBruto - (salarioBruto * impostoINSS);
}
else {
    impostoINSS = 570.88;
    salarioBase = salarioBruto - impostoINSS;
}
console.log(salarioBase);
let impostoIR;
let parcela;
if (salarioBase <= 1903.98) {
    impostoIR = 0;
    parcela = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoIR = 0.075;
    parcela = 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoIR = 0.15;
    parcela = 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoIR = 0.225;
    parcela = 636.13;
}
else {
    impostoIR = 0.275;
    parcela = 869.36;
}
let salarioLiquido = salarioBase - (salarioBase * impostoIR - parcela);
console.log(salarioLiquido);