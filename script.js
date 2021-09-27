// Requisito 3 Adelson
const selectButtonEnter = document.querySelector('#btn-enter');
selectButtonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  const selectEmail = document.querySelector('#input-email-login');
  const selectPassword = document.querySelector('#input-password-login');
  if (selectEmail.value.trim() === 'tryber@teste.com' && selectPassword.value.trim() === '123456') {
    selectEmail.value = '';
    selectPassword.value = '';
    return alert('Olá, Tryber!');
  }
  selectEmail.value = '';
  selectPassword.value = '';
  return alert('Email ou senha inválidos.');
});

// Requisito 18 Rafael
const selectBtnSend = document.querySelector('#submit-btn');
const selectInputAgreement = document.querySelector('#agreement');
selectBtnSend.disabled = true;

selectInputAgreement.addEventListener('click', () => {
  if (selectInputAgreement.checked) {
    selectBtnSend.disabled = false;
    selectBtnSend.style.display = 'inline-block';
    selectBtnSend.style.cursor = 'pointer';
  } else {
    selectBtnSend.disabled = true;
    selectBtnSend.style.display = 'none';
  }
});

// Requisito 20 Rafael
const selectTextArea = document.querySelector('#textarea');
const selectSpanCounter = document.querySelector('#counter');
selectSpanCounter.innerHTML = selectTextArea.maxLength;
selectTextArea.addEventListener('input', () => {
  const counter = selectTextArea.value.length;
  selectSpanCounter.innerHTML = 500 - counter;
});

// Requisito 21
const addClass = 'label-styles';
const selectFomrName = document.querySelector('#input-name');
const selectFormLastName = document.querySelector('#input-lastname');
const selectInputEmail = document.querySelector('#input-email');
const selectMainForm = document.querySelector('#evaluation-form');
const selectButtonSubmit = document.querySelector('#submit-btn');
const selectOptionHouse = document.querySelector('#house');
const selectInputFamily = document.querySelectorAll('.input-radio');
const selectInputLearn = document.querySelectorAll('.subject');
const selectInputAvaliation = document.querySelectorAll('.input-radio-evaluation input');
const selectInputNote = document.querySelector('#textarea');

function clearForm() {
  selectMainForm.innerHTML = '';
  const resultForm = document.createElement('form');
  resultForm.id = 'evaluation-form';
  resultForm.innerHTML = '<div id="form-title"><h1>Formulário de Avaliação</h1></div>';
  selectMainForm.appendChild(resultForm);
}

function createLabelFormPersonal() {
  const createLabel = document.createElement('label');
  createLabel.classList.add(addClass);
  createLabel.innerHTML = `Nome: ${selectFomrName.value} ${selectFormLastName.value}`;
  selectMainForm.appendChild(createLabel);
}

function createLabelEmail() {
  const createLabel = document.createElement('label');
  createLabel.classList.add(addClass);
  createLabel.innerHTML = `Email: ${selectInputEmail.value}`;
  selectMainForm.appendChild(createLabel);
}

function createLabelFormOption() {
  const createLabel = document.createElement('label');
  createLabel.classList.add(addClass);
  createLabel.innerHTML = `Casa: ${selectOptionHouse.value}`;
  selectMainForm.appendChild(createLabel);
}

function createLabelFamily() {
  for (let index = 0; index < selectInputFamily.length; index += 1) {
    if (selectInputFamily[index].checked) {
      const createLabel = document.createElement('label');
      createLabel.classList.add(addClass);
      createLabel.innerHTML = `Família: ${selectInputFamily[index].value}`;
      selectMainForm.appendChild(createLabel);
    }
  }
}

function createLabelLearn() {
  const createLabel = document.createElement('label');
  createLabel.classList.add(addClass);
  let matter = '';
  for (let index = 0; index < selectInputLearn.length; index += 1) {
    if (selectInputLearn[index].checked) {
      matter += `${selectInputLearn[index].value}, `;
    }
  }
  createLabel.innerHTML = `Matérias: ${matter}`;
  selectMainForm.appendChild(createLabel);
}

function createLabelAvaliation() {
  const createLabel = document.createElement('label');
  createLabel.classList.add(addClass);
  for (let index = 0; index < selectInputAvaliation.length; index += 1) {
    if (selectInputAvaliation[index].checked) {
      createLabel.innerHTML = `Avaliação: ${selectInputAvaliation[index].value}`;
      selectMainForm.appendChild(createLabel);
    }
  }
}

function createLabelNote() {
  const createLabel = document.createElement('label');
  createLabel.classList.add(addClass);
  createLabel.innerHTML = `Observações: ${selectInputNote.value}`;
  selectMainForm.appendChild(createLabel);
}

selectButtonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  clearForm();
  createLabelFormPersonal();
  createLabelEmail();
  createLabelFormOption();
  createLabelFamily();
  createLabelLearn();
  createLabelAvaliation();
  createLabelNote();
});
