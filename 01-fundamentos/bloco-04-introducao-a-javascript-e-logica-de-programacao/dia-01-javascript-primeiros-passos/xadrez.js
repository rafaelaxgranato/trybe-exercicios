let peca = 'Bispo';
switch (peca.toLowerCase()) {
    case 'rei':
        console.log("movimento vertical, horizontal ou diagonal, uma casa por lance");
        break;
    case 'rainha':
        console.log("movimento vertical, horizontal ou diagonal, uma ou mais casas por lance");
        break;
    case 'bispo':
        console.log("movimento diagonal");
        break;
    case 'cavalo':
        console.log("movimento em L");
        break;
    case 'torre':
        console.log("movimento vertical ou horizontal");
        break;
    default:
        console.log("erro");

    }