function encode(string) {
  let swap = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        swap += '1';
        break;
      case 'e':
        swap += '2';
        break;
      case 'i':
        swap += '3';
        break;
      case 'o':
        swap += '4';
        break;
      case 'u':
        swap += '5';
        break;
      default:
        swap += string[index];
    }
  }
  return swap;
}

function decode(string) {
  let swap = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        swap += 'a';
        break;
      case '2':
        swap += 'e';
        break;
      case '3':
        swap += 'i';
        break;
      case '4':
        swap += 'o';
        break;
      case '5':
        swap += 'u';
        break;
      default:
        swap += string[index];
    }
  }
  return swap;
}