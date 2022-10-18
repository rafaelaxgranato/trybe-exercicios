Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
Crie um botão que limpe as informações contidas nos campos.
(Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

window.onload = function () {
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function () {
        const formElements = document.querySelectorAll('input');
        const textArea = document.querySelector('textarea');
        for (let index = 0; index < formElements.length; index += 1) {
            formElements[index].value = '';
            formElements[index].checked = 'false';
        }
        textArea.value = '';
    })
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const validation = textInputValidation();
        if (validation === false) {
            alert('Dados inválidos');
        }
        else {
            alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
        }
    })
    const accept2 = document.getElementById("accept2");
    accept2.addEventListener('change', enableSubmit);
};

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.

function enableSubmit() {
    const submitButton = document.getElementById('submit');
    const accept2 = document.getElementById("accept2");
    submitButton.disabled = !accept2.checked;
}

function textInputValidation() {
    const name = document.getElementById('name').value.length;
    const invalidName = name < 10 || name > 40;

    const email = document.getElementById('email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const answer = document.getElementById('answer').value.length;
    const invalidAnswer = answer > 500;

    if (invalidName || invalidEmail || invalidAnswer) {
        return false;
    }
    else {
        return true;
    }
}

console.log(textInputValidation());