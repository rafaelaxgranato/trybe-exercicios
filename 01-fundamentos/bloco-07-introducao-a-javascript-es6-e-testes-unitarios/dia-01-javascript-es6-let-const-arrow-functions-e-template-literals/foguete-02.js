const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
    for (let index1 = 1; index1 < array.length; index1 += 1) {
        for (let index2 = 0; index2 < index1; index2 += 1) {
            if (array[index1] < array[index2]) {
                let position = array[index1];
                array[index1] = array[index2];
                array[index2] = position;
            }
        }        
    }
    return array;
}

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);