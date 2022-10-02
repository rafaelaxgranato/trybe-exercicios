let n = 5;
let forma = '';
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
for (let linha = 0; linha <= meio; linha += 1) {
    for (let coluna = 0; coluna <= n; coluna += 1) {
        if (coluna > esquerda && coluna < direita) {
            forma += '*';
        }
        else {
            forma += ' ';
        }
    }
    console.log(forma);
    forma = '';
    direita += 1;
    esquerda -= 1;
}