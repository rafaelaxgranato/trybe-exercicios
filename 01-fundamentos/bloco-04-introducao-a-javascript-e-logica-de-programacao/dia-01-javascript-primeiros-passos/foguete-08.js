let salarioBruto = 2000;
let impostoINSS;
if (salarioBruto < 1156.94) {
    impostoINSS = 0.08;
}
if else (salarioBruto >= 1156.94 && salarioBruto < 2594.92) {
    impostoINSS = 0.09;
}
if else (salarioBruto >= 2594.92 && salarioBruto < 5189.82) {
    impostoINSS = .11;
}
if else (salarioBruto >= 5189.82) {
    impostoINSS = 570.88;
}

let salarioBase = salarioBruto - (salarioBruto * impostoINSS)
let impostoIR;
if (salarioBase < 1903.98) {
    impostoIR = 0;
}
if else (salarioBase >= 1903.98 && salarioBruto2 < 2826.65) {
    impostoIR = 
}
