function calculon () {
  let displayNumbers = [];
  let operationNumbers = [];
  let operatorHolder = [];
  let runningTotal = [];
  let percentHolder = [];
  function sum (total, num) {
    return total + num;
  }
  function difference (total, num) {
    return total - num;
  }
  function product (total, num) {
    return total * num;
  }
  function quotient (total, num) {
    return total / num;
  }
  function numberClicked () {
    if (this.innerHTML === '.') {
      displayNumbers.push(this.innerHTML)
      document.getElementById('screen').innerHTML = displayNumbers.join('');
    } else {
      displayNumbers.push(Number(this.innerHTML));
      document.getElementById('screen').innerHTML = displayNumbers.join('');
    }
    if (displayNumbers[0] === 0) {
      displayNumbers.shift();
    }
    if (displayNumbers.join().split('').length > 13) {
      document.getElementById('screen').style.fontSize = '27px';
      document.getElementById('screen').style.paddingTop = '45px';
      document.getElementById('screen').style.paddingLeft = '15px';
    }
  }
  
  function plusOrMinus () {
    displayNumbers.push(displayNumbers * -1);
    displayNumbers.shift();
    document.getElementById('screen').innerHTML = displayNumbers;
  }

  function percentIt () {
    displayNumbers = Number(displayNumbers.join(''));
    percentHolder.push(displayNumbers);
    displayNumbers = [];
    displayNumbers.push(percentHolder * .01);
    document.getElementById('screen').innerHTML = displayNumbers;
  }

  function operatorClicked () {
    operationNumbers.push(Number(displayNumbers.join('')));
    operatorHolder.push(this.innerHTML);
    displayNumbers = [];
  }

  function equalsClicked () {
    operationNumbers.push(Number(displayNumbers.join('')));
    if (operatorHolder[operatorHolder.length - 1] === '+') {
      document.getElementById('screen').innerHTML = operationNumbers.reduce(sum);
      runningTotal[0] = operationNumbers.reduce(sum);
      displayNumbers = runningTotal;
      if (displayNumbers.join().split('').length > 8) {
        document.getElementById('screen').style.fontSize = '27px';
        document.getElementById('screen').style.paddingTop = '45px';
        document.getElementById('screen').style.paddingLeft = '15px';
      }
    } else
    if (operatorHolder[operatorHolder.length - 1] === '-') {
      document.getElementById('screen').innerHTML = operationNumbers.reduce(difference);
      runningTotal[0] = operationNumbers.reduce(difference);
      displayNumbers = runningTotal;
      if (displayNumbers.join().split('').length > 8) {
        document.getElementById('screen').style.fontSize = '27px';
        document.getElementById('screen').style.paddingTop = '45px';
        document.getElementById('screen').style.paddingLeft = '15px';
      }
    } else
    if (operatorHolder[operatorHolder.length - 1] === 'x') {
      document.getElementById('screen').innerHTML = operationNumbers.reduce(product);
      runningTotal[0] = operationNumbers.reduce(product);
      displayNumbers = runningTotal;
      if (displayNumbers.join().split('').length > 8) {
        document.getElementById('screen').style.fontSize = '27px';
        document.getElementById('screen').style.paddingTop = '45px';
        document.getElementById('screen').style.paddingLeft = '15px';
      }
    } else
    if (operatorHolder[operatorHolder.length - 1] === '÷') {
      document.getElementById('screen').innerHTML = operationNumbers.reduce(quotient);
      runningTotal[0] = operationNumbers.reduce(quotient);
      displayNumbers = runningTotal;
        if (displayNumbers.join().split('').length > 8) {
          document.getElementById('screen').style.fontSize = '27px';
          document.getElementById('screen').style.paddingTop = '45px';
          document.getElementById('screen').style.paddingLeft = '15px';
        }
      }
      operationNumbers = [];
  }

  function clearScreen () {
    document.getElementById('screen').innerHTML = '0';
    document.getElementById('screen').style.fontSize = '60px';
    document.getElementById('screen').style.paddingTop = '15px';
    displayNumbers = [];
    operationNumbers = [];
    operatorHolder = [];
    runningTotal = [];
    percentHolder = [];
  }

document.querySelectorAll('.calcButtonNum').forEach(fn => {fn.addEventListener('click', numberClicked)});
document.querySelectorAll('.calcButtonOperator').forEach(fn => {fn.addEventListener('click', operatorClicked)});
document.getElementById('calcButtonEquals').addEventListener('click', equalsClicked);
document.getElementById('clear').addEventListener('click', clearScreen);
document.getElementById('calcButtonPlusMinus').addEventListener('click', plusOrMinus);
document.getElementById('calcButtonModulo').addEventListener('click', percentIt);
}

calculon ();