// Função para criar um botão retangular
function createButton(text, onClick) {
  const button = document.createElement('button');
  button.innerText = text;
  button.addEventListener('click', onClick);
  return button;
}

// Função para exibir a primeira etapa do registro de chamados
function showStep1() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const heading = document.createElement('h2');
  heading.innerText = 'Etapa 1: Informações básicas';

  const buttonNext = createButton('Próximo', showStep2);

  content.appendChild(heading);
  content.appendChild(buttonNext);
}

// Função para exibir a segunda etapa do registro de chamados
function showStep2() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const heading = document.createElement('h2');
  heading.innerText = 'Etapa 2: Descrição do chamado';

  const buttonNext = createButton('Próximo', showStep3);

  content.appendChild(heading);
  content.appendChild(buttonNext);
}

// Função para exibir a terceira etapa do registro de chamados
function showStep3() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const heading = document.createElement('h2');
  heading.innerText = 'Etapa 3: Finalização';

  const buttonSubmit = createButton('Enviar', submitForm);

  content.appendChild(heading);
  content.appendChild(buttonSubmit);
}

// Função para processar o envio do formulário
function submitForm() {
  // Aqui você pode escrever o código para processar e exportar os dados para o Excel
  alert('Formulário enviado com sucesso!');
}

// Exibir a primeira et

// ...

// Função para exibir a primeira etapa do registro de chamados
function showStep1() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const heading = document.createElement('h2');
  heading.innerText = 'Etapa 1: Escolha o prédio';

  const form = document.createElement('form');
  form.id = 'building-form';

  const buildingCT1 = createRadioButton('building', 'CT I', 'building-ct1');
  const buildingCT2 = createRadioButton('building', 'CT II', 'building-ct2');
  const buildingCT3 = createRadioButton('building', 'CT III', 'building-ct3');

  const buttonNext = createButton('Próximo', showStep2);

  form.appendChild(buildingCT1);
  form.appendChild(buildingCT2);
  form.appendChild(buildingCT3);
  form.appendChild(buttonNext);

  content.appendChild(heading);
  content.appendChild(form);
}

// ...

// Capturar a seleção do prédio quando o formulário for enviado
document.getElementById('building-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário padrão
  const selectedBuilding = document.querySelector('input[name="building"]:checked').value;
  console.log('Prédio selecionado:', selectedBuilding);
  showStep2();
});
