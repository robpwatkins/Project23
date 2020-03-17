function pressed () {
  this.classList.add('pressed');
}

function pressAndRelease () {
  let yup = this;
  this.classList.add('pressed');
  setTimeout(function () {yup.classList.remove('pressed')}, 65);
}

function unPressed () {
  document.querySelectorAll('.calcButtonOperator').forEach(fn => {fn.classList.remove('pressed')});
}

document.querySelectorAll('.calcButtonOperator').forEach(fn => {fn.addEventListener('click', unPressed)});
document.querySelectorAll('.calcButtonOperator').forEach(fn => {fn.addEventListener('click', pressed)});
document.querySelectorAll('.presser').forEach(fn => {fn.addEventListener('click', pressAndRelease)});
document.getElementById('calcButtonEquals').addEventListener('click', unPressed);
document.getElementById('clear').addEventListener('click', unPressed);
