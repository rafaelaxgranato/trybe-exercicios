function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// Parte 1

// Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let ulTag = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let liTag = document.createElement('li');
    liTag.className = 'day';
    liTag.innerHTML = decemberDaysList[index];
    ulTag.appendChild(liTag);
    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
      liTag.className = 'day holiday';
    }
    else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
      liTag.className = 'day friday';
    }
    else if (decemberDaysList[index] === 25) {
      liTag.className = 'day holiday friday';
    }
  }
}
createDaysOfTheMonth();

// Parte 2

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function createHolidayButton(string) {
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = string;
  let divTag = document.getElementsByClassName('buttons-container')[0];
  divTag.appendChild(button);
}
createHolidayButton('Feriados');

// Parte 3

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

function changeBackgroundColor() {
  let button = document.getElementById('btn-holiday');
  let holiday = document.getElementsByClassName('holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newBackgroundColor = 'green';
  button.addEventListener('click', function() {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === newBackgroundColor) {
        holiday[index].style.backgroundColor = backgroundColor;
      }
      else {
        holiday[index].style.backgroundColor = newBackgroundColor;
      }
    }
  })
}
changeBackgroundColor();

// Parte 4

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function createFridayButton(string) {
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = string;
  let divTag = document.getElementsByClassName('buttons-container')[0];
  divTag.appendChild(button);
}
createFridayButton('Sexta-feira');

// Parte 5

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function changeText(string) {
  let button = document.getElementById('btn-friday');
  let friday = document.getElementsByClassName('friday');
  let sextou = 'Sextou!';
  button.addEventListener('click', function() {
    for (let index = 0; index < friday.length; index += 1) {
      if (friday[index].innerHTML !== sextou) {
        friday[index].innerHTML = sextou;
      }
      else {
        friday[index].innerHTML = string[index];
      }
    }
  })
}
let fridays = [4, 11, 18, 25];
changeText(fridays);

// Parte 6

// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.

function zoomIn() {
  let day = document.getElementById('days');
  day.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '25px';
  })
}

function zoomOut() {
  let day = document.getElementById('days');
  day.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
}

zoomIn();
zoomOut();

// Parte 7

// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function task(string) {
let spanTag = document.createElement('span');
let divTag = document.getElementsByClassName('my-tasks')[0];
spanTag.innerHTML = string;
divTag.appendChild(spanTag);
}
task('cozinhar');

// Parte 8

// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"
// Parte 9

// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
// Parte 10

// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
// Bônus

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”.
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// Dica - Propriedade: key.
