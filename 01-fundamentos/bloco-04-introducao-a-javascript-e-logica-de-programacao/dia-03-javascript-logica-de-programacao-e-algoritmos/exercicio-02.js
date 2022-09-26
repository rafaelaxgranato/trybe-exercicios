let word = 'tryber';
let drow = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
    drow += word[index];
}
console.log(drow);