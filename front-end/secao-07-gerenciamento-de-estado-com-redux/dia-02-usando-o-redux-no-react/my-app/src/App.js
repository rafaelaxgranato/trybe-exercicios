import React from 'react';
import { connect } from 'react-redux';
import { actionCreator,clickCounter } from './redux/actions';

class App extends React.Component {
  render() {
    // Cria uma prop countState, que recebe o valor da chave count armazenada no estado global.
    const { dispatch, countState, clicksCount } = this.props;
    const dispatchAll = (add = 1) => {
      dispatch(actionCreator(add));
      dispatch(clickCounter());
    };
    /* Por padrão, ao conectar um componente com a função connect, ele recebe uma prop chamada dispatch.
    Essa prop é uma função que envia uma action ao reducer, o qual realiza uma alteração no estado global. */
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatchAll()}>Incrementa 1</button>
        <button onClick={() => dispatchAll(5)}>Incrementa 5</button>
        <h3>Número de clicks: { clicksCount }</h3>
      </div>
    );
  }
}

/* Lê as informações do estado global com o Redux.
Recebe como parâmetro as informações do estado global, e retorna os valores que estão armazenados na store.
Esses valores podem ser acessados via props no componente.
A função mapStateToProps é definida fora do escopo da classe do componente.
Por isso, o componente ainda não consegue acessar a prop countState.
Isso acontece pois ainda é necessário conectar o componente com o Redux.
Para isso, utiliza-se a função connect, disponibilizada pela biblioteca react-redux. */
const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksCount: state.counterReducer.clicks,
});

/* Conecta a função mapStateToProps ao componente através do connect, que retorna uma versão “especial” do componente, conectada à função mapStateToProps.
No código do componente, pode-se chamar o connect diretamente na exportação.
Com isso, o componente acessa o valor armazenado no estado global. */
export default connect(mapStateToProps)(App);
