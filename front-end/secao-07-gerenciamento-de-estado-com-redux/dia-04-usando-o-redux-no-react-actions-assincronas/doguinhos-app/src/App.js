import React from 'react';
import { connect } from 'react-redux';

import { fetchDogImage } from "./redux/actions";

import "./style.css"

class App extends React.Component {
  render() {
    const { isFetching, imageURL, dispatch } = this.props;

    if (isFetching) return <p>Carregando...</p>;

    return (
      <div>
        <button
          /* Ao clicar no botão, a action fetchDog é disparada por meio da função dispatch.
          Essa action deve realizar o fetch da API e, após receber a resposta, enviar a ação ao reducer para salvar as informações obtidas pela API no estado global. */
          onClick={() => { dispatch(fetchDogImage()) }}
          type="button"
        >
          Novo Doguinho
        </button>
        {
          imageURL &&
          <img
            src={imageURL}
            alt="Imagem de um cachorro aleatório"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);
