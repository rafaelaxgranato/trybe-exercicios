/* Actions creators são funções que criam e retornam uma action, evitando o trabalho de precisar digitar o objeto inteiro toda vez que for chamar a action.
Além disso, é uma boa forma de padronizar uma ação, evitando assim possíveis erros caso ela seja utilizada várias vezes.
Sem a action creator, precisa-se digitar o objeto inteiro da action duas vezes, uma para enviar o valor 1, outra para enviar o valor 5.
Criando uma action creator, pode-se apenas enviar por parâmetro o valor que deve ser incrementado, evitando que a aplicação possua muito código repetido. */
export const actionCreator = (increment = 1) => ({ 
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });

  export const clickCounter = () => ({
    type: 'INCREMENT_CLICK',
  });