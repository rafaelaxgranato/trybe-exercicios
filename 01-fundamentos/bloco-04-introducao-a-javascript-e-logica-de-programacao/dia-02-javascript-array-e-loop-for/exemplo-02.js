let numero = 9;
for (let contador = 1; contador <= 9; contador = contador += 1) {
    console.log("")
    console.log(numero * contador);
}

let listaDeNomes = ["Joana", "Maria", "Lucas"];
for (let indice = 0; indice < listaDeNomes.length; indice += 1) {
    let mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
    console.log(mensagem);
}