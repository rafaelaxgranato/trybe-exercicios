const custoProduto = 80;
const venda = 120;
const imposto = 0.2;
const custoTotal = custoProduto + (custoProduto * imposto);
const lucro = venda - custoTotal;
const lucroMil = lucro * 1000;
if (custoProduto < 0 || venda < 0) {
    console.log("erro");
}
else {
    console.log(lucroMil);
}