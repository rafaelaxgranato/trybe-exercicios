let n = 5;
let forma = '';
let posicao = n - 1;
for (let linha = 0; linha < n; linha += 1) {
    for (let coluna = 0; coluna < n; coluna += 1) {
        if (coluna < posicao) {
            forma += ' ';
        }
        else {
            forma += '*';
        }
    }
    console.log(forma);
    forma = '';
    posicao -= 1;
}