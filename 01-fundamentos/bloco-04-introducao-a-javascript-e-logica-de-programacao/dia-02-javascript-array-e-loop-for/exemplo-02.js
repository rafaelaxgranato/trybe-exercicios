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

let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}