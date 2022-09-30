let salarioBruto = 100000;
let impostoINSS;
if (salarioBruto <= 1156.94) {
    impostoINSS = salarioBruto * 0.08;
}
else if (salarioBruto >= 1156.95 && salarioBruto <= 2594.92) {
    impostoINSS = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    impostoINSS = salarioBruto * 0.11;
}
else {
    impostoINSS = 570.88;
}
let salarioBase = salarioBruto - impostoINSS;
let impostoIR;
if (salarioBase <= 1903.98) {
    impostoIR = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoIR = salarioBase * 0.075 - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoIR = salarioBase * 0.15 - 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoIR = salarioBase * 0.225 - 636.13;
}
else {
    impostoIR = salarioBase * 0.275 - 869.36;
}
let salarioLiquido = salarioBase - impostoIR;
console.log(salarioLiquido);