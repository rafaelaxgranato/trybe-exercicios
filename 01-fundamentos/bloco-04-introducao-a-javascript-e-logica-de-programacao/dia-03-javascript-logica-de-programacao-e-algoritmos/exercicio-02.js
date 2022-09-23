let word = 'tryber';
for (let index = 0; index < word.length; index += 1) {
    let posicao = word[index];
    word[index] = word[word.length];
    word[word.length] = posicao;
}
console.log(word);