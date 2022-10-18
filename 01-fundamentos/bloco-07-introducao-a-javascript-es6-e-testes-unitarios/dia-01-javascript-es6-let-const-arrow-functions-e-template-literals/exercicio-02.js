// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

// Exemplo:
 // retorna 'aconteceu'
// Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().

const longestWord = (string) => {
    const words = string.split(' ');
    let biggest = '';
    for (let index = 0; index < words.length; index += 1) {
        if (words[index].length > biggest.length) {
            biggest = words[index];
        }
    }
    return biggest;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

const theLongestWord = string => string.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(theLongestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));