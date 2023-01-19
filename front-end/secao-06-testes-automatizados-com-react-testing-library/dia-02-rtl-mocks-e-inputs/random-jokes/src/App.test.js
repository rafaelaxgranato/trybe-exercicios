import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

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
