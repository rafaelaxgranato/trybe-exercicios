import React from 'react'; // Importa o React para poder trabalhar com a criação de componentes em JSX.
import { Router } from 'react-router-dom'; // importa o Router, que serve para ter acesso ao histórico criado pelo createMemoryHistory.
import { createMemoryHistory } from 'history'; // Importa o createMemoryHistory, que cria o histórico em memória durante os testes.
import { render } from '@testing-library/react'; // Importa o render, assim tem-se acesso a todos os seletores que ele possui, como getByText ou getByRole.

/* Uma função helper (ou assistente) executa uma tarefa específica e não depende de outras funções.
Nesso caso, a helper cria um histórico e renderiza o componente que será testado. */
const renderWithRouter = (component) => {
  const history = createMemoryHistory(); // Utiliza a função createMemoryHistory para criar uma variável history que armazena o histórico.

  /* Retorna um objeto com as informações necessárias para o teste.
  Todas as propriedades retornadas pelo método render também são retornadas no objeto, pois usa-se a Spread Syntax.
  Além disso, também retorna a constante history, o que serve para levar a outras páginas com facilidade.
  A função render recebe como parâmetro o componente <Router />.
  O <Router />, por sua vez, recebe como props history a variável que também se chama history.
  Além disso, o parâmetro recebido component é passado como children para o <Router />.
  Dessa forma, renderiza-se nos testes o componente desejado encapsulado pelo <Router />. */
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;
