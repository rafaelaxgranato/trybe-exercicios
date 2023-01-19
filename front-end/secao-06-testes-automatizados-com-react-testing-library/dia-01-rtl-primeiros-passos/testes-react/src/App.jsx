import React, { Component } from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends Component {
  state = {
    email: '',
    saveEmail: '',
  };

  changeEmail = (value) => {
    this.setState({
      email: value,
    });
  };

  changeSaveEmail = (value) => {
    this.setState({
      saveEmail: value,
      email: '',
    });
  };

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            type="email"
            value={ email }
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          type="button"
          value="Enviar"
          id="btn-send"
          data-testid="id-send"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input type="button" value="Voltar" id="btn-back" />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
