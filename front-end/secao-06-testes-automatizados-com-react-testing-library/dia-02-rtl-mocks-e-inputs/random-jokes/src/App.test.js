import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// Faz com que, após cada teste, o mock seja limpo, ou seja, garante que, após o teste, o fetch não seja mais um mock. Isso é bem útil para que não haja interferência entre um teste e outro.
afterEach(() => jest.clearAllMocks());

/* É importante ter o async para que se possa utilizar await findByText, que diz teste: espere até que consiga encontrar esse texto no dom, ou uma mensagem de erro por limite de tempo. */
it('fetches a joke', async () => {

  // Cria um objeto similar ao que é retornado da API.
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  /* Espiona as chamadas à função fetch do objeto global.
  É por meio deste objeto global que é possível usar qualquer função do sistema(por exemplo, a função parseInt). */
  jest.spyOn(global, 'fetch');
  /* Quando a função fetch for chamada, em vez de fazer uma requisição à uma API externa, será chamado o mock.
  Para cada .then, utiliza-se .mockResolvedValue e simula-se o retorno que o fetch teria.
  Primeiro, retorna-se um objeto que contém a função .json, e dentro dela cria-se um mock que retorna a piada, satisfazendo o que é esperado no componente. */
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  // // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));
  // // Nesse exemplo, global.fetch é uma função mockada com jest.fn que retorna uma Promise, e na primeira vez que ela for resolvida, deve retornar um objeto com uma outra função json que também é uma Promise, que quando resolvida retorna a piada.

  // // Uma terceira forma de escrever o mesmo exemplo é com a sintaxe async/await, onde tem-se o mock dessa forma:
  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  // As funções toBeCalledTimes e toBeCalledWith servem para garantir, respectivamente, o número de chamadas ao fetch, e que ele foi chamado com os argumentos corretos.
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('fetches a new joke when button is clicked', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // Segunda variável com outra piada.
  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  }

  jest.spyOn(global, 'fetch');
  /* Antes de clicar no botão para fazer uma nova requisição, precisa-se preparar o mock, para que seja retornada uma piada diferente da que foi recebida na primeira requisição.
  Ao invés de usar o mockResolvedValue, usa-se o mockResolvedValueOnce.
  Assim, o mock da primeira somente será utilizado uma vez, podendo-se controlar qual resposta será dada em cada vez que a requisição for feita. */
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke1),
  });
  
  render(<App />);
  const newJokeButton = screen.getByRole('button', { name: 'New joke' }); // Pega o botão para poder usá-lo nos testes.

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument(); // Testa se uma piada é renderizada na tela logo que a aplicação é iniciada.
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument(); // Testa se a segunda piada não é renderizada na tela antes de o botão ter sido clicado.
  expect(global.fetch).toBeCalledTimes(1); // Testa se a função fetch foi chamada apenas uma vez.

  // Cria e configura o segundo mock para retornar a nova piada.
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(joke2),
  });

  userEvent.click(newJokeButton); // Com o segundo mock configurado, pode-se clicar no botão.

  /* Depois de clicar no botão, testa-se o comportamento da aplicação.
  Precisa-se garantir que a primeira piada foi substituída pela segunda piada, ou seja, a segunda piada está sendo exibida, e a primeira piada não está sendo exibida. */
  expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2); // Testa se a função fetch foi chamada duas vezes.
});
