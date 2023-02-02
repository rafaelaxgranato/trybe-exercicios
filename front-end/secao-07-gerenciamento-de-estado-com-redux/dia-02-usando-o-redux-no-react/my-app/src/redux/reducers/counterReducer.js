// Estado global da aplicação.
const INITIAL_STATE = {
    /* Conta o número de vezes que os botões foram clicados.
    Ao utilizar o combineReducers, o estado global se torna um objeto em que as suas chaves são os reducers. */
    counterReducer: {
      clicks: 0,
      count: 0,
    },
  };
  
  /* Implementa a lógica de incrementar o estado global do Redux.
  A função reducer recebe como parâmetro o estado inicial e uma action.
  Por padrão, a action sempre retorna um objeto com a chave type, que informa qual ação deve ser feita no estado.
  Verifica-se se a ação é INCREMENT_COUNTER.
  Em caso positivo, ele incrementa o valor da chave count, que está no estado global, em 1.*/
  function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        // Ajusta a função reducer para incrementar de acordo com o valor recebido pela chave payload da action criada.
        return { 
            /* Usa-se o spread operator para não apagar o valor clicks anterior do estado.
            Dessa forma, ao executar a ação INCREMENT_COUNTER, o reducer irá reescrever o estado global, adicionando todos os valores que não foram modificados (...state), e irá adicionar a chave count com o seu valor atualizado. */
            ...state,
            count: state.counterReducer.count + action.payload };
      case 'INCREMENT_CLICK':
        return {
          ...state,
          clicks: state.counterReducer.clicks + 1,
        };
      default:
        return state;
    }
  }
  
  export default counterReducer;
  