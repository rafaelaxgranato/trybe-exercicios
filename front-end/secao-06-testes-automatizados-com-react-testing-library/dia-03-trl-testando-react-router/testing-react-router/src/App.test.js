import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
/* Só pode haver um export default por arquivo (que faz o componente ser importável sem as chaves {}), e o App tomou esse espaço, então os outros componentes exportados ficam em “segundo plano”.
Por isso, para serem importados corretamente, necessitam do {} */
import App, { About } from './App';

// Tendo mais de um caso de uso, é interessante colocar o describe; ele ajuda bastante na hora de separar os testes, e, numa eventual falha, sabe-se qual teste falhou.
describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {

    // Chama a helper passando o componente a ser renderizado, ou seja, renderiza a aplicação toda, fazendo um teste geral.
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink); // Clica no link About na aplicação.
    const { pathname } = history.location;
    expect(pathname).toBe('/about'); // Verifica se está na página correta.
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument(); // Verifica se o texto que aparece quando clica no link no navegador é encontrado.
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    /* Ao utilizar funções que alteram o estado da aplicação, é recomendado envolvê-las com o act(() => {...}).
    Isso faz com que o teste simule melhor a forma como o React trabalha no navegador. */
    act(() => {
      history.push('/pagina/que-nao-existe/'); // Utiliza a função history.push() e passa como argumento algum link que não existe dentro da aplicação.
    })

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument(); // Testa se ao digitar um caminho para uma página que não existe, o texto que aparece no navegador é encontrado.
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
});
