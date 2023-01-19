import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      { email && (<h3 data-testid="id-is-email-valid" className={ verifyEmail(email) ? 'green-text' : 'red-text' /* Condicional no atributo className, que define as classes css do elemento h3, trocando sua coloração entre verde (email válido) e vermelho (email inválido). */}>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>) /* Renderização condicional com o operador lógico '&&' para que o elemento <h3> só exista quando a variável email tiver algum valor verdadeiro. */}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
