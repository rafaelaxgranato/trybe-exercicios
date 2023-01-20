import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/* Para efeito de aprendizado, tem-se mais de um componente dentro do arquivo App.js, por isso o export default no componente App.
Os outros componentes, que estão sendo exportados acima do component App, também tem os seus respectivos exports.
Isso não é uma boa prática, mas dessa forma diminui-se a complexidade da aplicação, facilitando o entendimento.
Outro ponto de atenção é que, ao utilizar o export default e o export, a maneira de importar os componentes sofre uma pequena alteração, que será vista na hora de realizar os testes. */
export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

// Cria um router básico com duas páginas, a Home e a About, além de criar uma página de Not Found para quando a pessoa digitar uma URL que não exista.
export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
