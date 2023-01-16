import React, { Component } from 'react';
import AnecdoteInput from './AnecdoteInput';
import NameInput from './NameInput';
import SelectInput from './SelectInput';

export class Form extends Component {
  state = { // Cria o estado contendo os campos do formulário.
    email: '',
    name: '',
    age: '',
    anecdote: '',
    terms: false,
    formularioComErros: true,
  }

  // Função que permite ver se todos os campos obrigatórios foram preenchidos.
  handleError = () => {
    const { name, email, age, anecdote, terms } = this.state;

    /* Cria um array com os dados obrigatórios.
    Caso o length seja 0, então !campo.length será true. */
    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i), // Descobrir o que significa esse parâmetro.
      !age.length,
      !anecdote.length,
      !terms,
    ]

    // Caso haja algum campo que seja true, formularioPreenchido estará false.
    const formularioPreenchido = errorCases.every((error) => error !== true);
    this.setState({
      // Armazena-se o valor inverso no estado para saber se o formulário possui erros.
      formularioComErros: !formularioPreenchido,
    });

  }

  /* Função genérica para auxiliar na alteração de vários elementos do estado.
  Recebe o nome do campo e o valor atribuído, alterando no estado apenas a propriedade correta. */
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // Condicional para verificar o type, uma vez que o valor do type checkbox é a propriedade checked e não value.
    this.setState({
      [name]: value,
    }, this.handleError); // Após alterar o estado, chama-se a função que verifica os erros.
  }

  render() {
    const { email, name, age, anecdote, terms, formularioComErros } = this.state; // Busca o valor do email do estado.
    return (
      <div>
        <h1>Estados e React: tecnologia fantástica ou reagindo a regionalismos? </h1>
        <form action="">
          <fieldset>
            <legend>Informações pessoais</legend>

            <NameInput name={ name } handleChange={ this.handleChange } />

            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange} // Chama a função handleChange quando o valor do campo de email do formulário é alterado.
                value={email} // O campo de email busca seu valor diretamente do estado.
              />
            </label>

            <SelectInput age={age} handleChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>

            <AnecdoteInput anecdote={ anecdote} handleChange={ this.handleChange} />

            <input type="file" name="" id="" />
          </fieldset>

          <label htmlFor="terms">
            <input type="checkbox" name="terms" id="terms" onChange={this.handleChange} value={terms} />
            Concordo com termos e acordos.
          </label>
        </form>
        { formularioComErros ? <span style={ { color: 'red'} }>Preencha todos os campos.</span> : <span style={ { color: 'green'} }>Todos os campos foram preenchidos.</span>}
      </div>
    )
  }
}

export default Form;