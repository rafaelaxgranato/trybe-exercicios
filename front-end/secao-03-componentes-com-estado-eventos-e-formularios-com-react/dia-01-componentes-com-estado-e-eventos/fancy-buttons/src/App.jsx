import './App.css';
import React from 'react';

class App extends React.Component {
  state = { //  Cria um estado com três chaves, cada uma representando o número de cliques de um botão.
    button1: 0,
    button2: 0,
    button3: 0,
  }

  // 
  handleClick1 = () => {
    const {button1} = this.state;
    this.setState(({button1}) => ({ /* Função que altera o estado do componente. Para incrementar o valor de um estado, é necessário acessar o seu valor anterior e somá-lo. Para isso, utiliza-se um parâmetro na função da setState, que representa o valor anterior. A sintaxe é parecida com essa:
    this.setState((prevState) => {button1: prevState.button1 + 1}),
    sendo prevState o valor do estado anterior. Para reduzir o código, desestrutura-se o prevState, ficando da seguinte maneira:
    this.setState(({ button1 }) => ({ button1: button1 + 1 })). */
      button1: button1 + 1,
    }), () => {
      console.log(`${this.handleColor(button1)}`); /* Para o botão imprimir a sua cor ao ser clicado, é preciso adicionar um segundo parâmetro à função this.setState(). Esse parâmetro, por sua vez, também é uma função. A sintaxe fica parecida com a seguinte:
      this.setState(() => { ... }, () => { ... })
      Dessa forma, primeiro realiza-se o que está na função do primeiro parâmetro (alteração do estado), para só então realizar a função que está no segundo parâmetro (console.log() contendo a cor do botão no momento do clique). */
    })
  }
  handleClick2 = () => {
    const {button2} = this.state;
    this.setState(({button2}) => ({
      button2: button2 + 1,
    }), () => {
      console.log(`${this.handleColor(button2)}`);
    })
  }
  handleClick3 = () => {
    const {button3} = this.state;
    this.setState(({button3}) => ({
      button3: button3 + 1,
    }), () => {
      console.log(`${this.handleColor(button3)}`);
    })
  }

  /* Função que recebe por parâmetro um número (que representa o número de cliques em cada botão) e, se esse número for par, retorna a string 'green'; caso contrário, retorna 'white'. */
  handleColor = (clicks) => {
    return clicks % 2 === 0 ? 'green' : 'white';
  }

  /* Botões que, ao serem clicados, executam as funções handleClick. Para acessar uma função que está dentro da classe, é necessário acessá-la por meio do objeto this. Portanto, para que a função seja executada no clique do botão,  ela deve ser chamada da seguinte maneira: this.handleClick. */
  render() {
    const {button1, button2, button3} = this.state; /* Para acessar o valor de um estado do componente, utiliza-se o objeto this.state.nomeDoEstado, que foi desestruturado aqui. Agora, adiciona-se o valor desse estado no botão, para que fique visível à pessoa usuária. */

    /* Para renderizar a cor no botão, precisa-se adicionar um backgroundColor. Como não está sendo utilizando arquivo CSS aqui, utiliza-se inline style, ou seja, adiciona-se os atributos CSS diretamente nosso botão, por meio do atributo style. Agora, basta adicionar no atributo style o backgroundColor, que é o valor do retorno da função handleColor(clicks). */
    return <div>
      <button onClick={this.handleClick1} style={{backgroundColor: this.handleColor(button1)}}>{button1}</button>
      <button onClick={this.handleClick2} style={{backgroundColor: this.handleColor(button2)}}>{button2}</button>
      <button onClick={this.handleClick3} style={{backgroundColor: this.handleColor(button3)}}>{button3}</button>
      </div>
  }
}

export default App;
