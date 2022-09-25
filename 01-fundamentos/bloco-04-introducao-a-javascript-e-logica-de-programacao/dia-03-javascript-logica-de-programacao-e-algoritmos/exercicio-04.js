for (let index1 = 2; index1 <= 50, index1 += 1) {
    for (let index2 = 2; index2 <= 50; index2 += 1) {
        if (index1 % index2 != 0) {
            let contador += 1;
        }
        if (contador == 1) {
            console.log("o número ", index1, " é primo")
        }
    }
}