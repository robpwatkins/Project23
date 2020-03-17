// function clickedIt () {
//   document.getElementById('clickIt').style.background='lightblue';
//   document.getElementById('clickIt').style.color='white';
// }

// document.getElementById('clickIt').addEventListener('click', clickedIt);

// let numArray = [];
// let numArray2 = [];
// let numArray3 = [];
// // let numString = numArray.join('');
// function sum () {
//   return total + num;
// }

// function clickedButton () {
//   // numArray = [];
//   numArray.push(Number(this.innerHTML));
//   document.getElementById('screen').innerHTML = numArray.join('');
//   // let numString = numArray.join('');
//   // numArray2.push(numArray.join(''));
//   // console.log(numArray2);
//   function addItUp () {
//     numArray2.push(numArray.join(''));
//     console.log(numArray2);
//     numArray = [];
//   }
//   function equals () {
//     numArray2.push(numArray.join(''))
//     numArray2.reduce(sum);
//     // console.log(Number(numArray.join('')));
//     // console.log(resultNum);
//   }
//   document.getElementById('calcButtonPlus').addEventListener('click', addItUp);
//   document.getElementById('calcButtonEquals').addEventListener('click', equals);
// }

// function clearScreen () {
//   numArray = [];
//   document.getElementById('screen').innerHTML = '0';
// }



// document.getElementById('calcButton7').addEventListener('click', clickedButton);
// document.querySelectorAll('.calcButtonNum').forEach(fn => {fn.addEventListener('click', clickedButton)});
// document.getElementById('clear').addEventListener('click', clearScreen);

// function calculon () {
//   let numArrayDisplay = [];
//   let numArray = [];
//   let runningTotal = [];
//   function sum (total, num) {
//     return total + num;
//   }
//   function difference (total, num) {
//     return total - num;
//   }
//   function product (total, num) {
//     return total * num;
//   }
//   function quotient (total, num) {
//     return total / num;
//   }
//   function clickedButton () {
//     numArrayDisplay.push(Number(this.innerHTML));
//     document.getElementById('screen').innerHTML = numArrayDisplay.join('');
//   }
//   function operator () {
//     numArray.push(Number(numArrayDisplay.join('')));
//     if (this.innerHTML === '+') {
//       runningTotal = numArray.reduce(sum);
//     } else
//       if (this.innerHTML === '-') {
//         runningTotal = numArray.reduce(difference);
//         // console.log(runningTotal);
//     } else
//       if (this.innerHTML === 'X') {
//         runningTotal = numArray.reduce(product);
//         // console.log('you better times it');
//     } else
//       if (this.innerHTML === '÷') {
//         runningTotal = numArray.reduce(quotient);
//         // console.log(runningTotal);
//     }   
//     console.log(runningTotal); 
//     document.getElementById('screen').innerHTML = runningTotal;
//     numArrayDisplay = [];
//     // console.log(numArray);
//     // console.log(runningTotal);
//   }
//   function equals () {
//     // console.log(runningTotal);
//     // numArray.push(Number(numArrayDisplay.join('')));
//     document.getElementById('screen').innerHTML = runningTotal;
//     numArrayDisplay = [];
//     numArray = [];
//   }

//   function clearScreen () {
//     numArrayDisplay = [];
//     numArray = [];
//     document.getElementById('screen').innerHTML = '0';
//   }

//   document.querySelectorAll('.calcButtonNum').forEach(fn => {fn.addEventListener('click', clickedButton)});
//   document.querySelectorAll('.calcButtonOperator').forEach(fn => {fn.addEventListener('click', operator)});
//   document.getElementById('calcButtonEquals').addEventListener('click', equals);
//   document.getElementById('clear').addEventListener('click', clearScreen);
// }

// function calculon () {
//   let numArrayDisplay = [];
//   let numArray = [];
//   let runningTotal = [];
//   function sum (total, num) {
//     return total + num;
//   }
//   function difference (total, num) {
//     return total - num;
//   }
//   function product (total, num) {
//     return total * num;
//   }
//   function quotient (total, num) {
//     return total / num;
//   }
//   function clickedButton () {
//     numArrayDisplay.push(Number(this.innerHTML));
//     document.getElementById('screen').innerHTML = numArrayDisplay.join('');
//   }
//   function addIt () {
//     numArray.push(Number(numArrayDisplay.join('')));
//     runningTotal = numArray.reduce(sum);
//     document.getElementById('screen').innerHTML = runningTotal;
//     numArrayDisplay = [];
//   }
//   function subtractIt () {
//     numArray.push(Number(numArrayDisplay.join('')));
//     runningTotal = numArray.reduce(difference);
//     document.getElementById('screen').innerHTML = runningTotal;
//     numArrayDisplay = [];
//   }
//   function multiplyIt () {
//     numArray.push(Number(numArrayDisplay.join('')));
//     runningTotal = numArray.reduce(product);
//     document.getElementById('screen').innerHTML = runningTotal;
//     numArrayDisplay = [];
//   }
//   function divideIt () {
//     numArray.push(Number(numArrayDisplay.join('')));
//     runningTotal = numArray.reduce(quotient);
//     document.getElementById('screen').innerHTML = runningTotal;
//     numArrayDisplay = [];
//   }
//   function equals () {
//     // addIt ();
//     // subtractIt ();
//     // multiplyIt ();
//     // divideIt ();
//     console.log(runningTotal);
//   }
//   document.querySelectorAll('.calcButtonNum').forEach(fn => {fn.addEventListener('click', clickedButton)});
//   // document.querySelectorAll('.calcButtonOperator').forEach(fn => {fn.addEventListener('click', operator)});
//   document.getElementById('calcButtonPlus').addEventListener('click', addIt);
//   document.getElementById('calcButtonMinus').addEventListener('click', subtractIt);
//   document.getElementById('calcButtonMultiplication').addEventListener('click', multiplyIt);
//   document.getElementById('calcButtonDivision').addEventListener('click', divideIt);
//   document.getElementById('calcButtonEquals').addEventListener('click', equals);
// }

// function calculon () {
//   let displayNumbers = [];
//   let operationNumbers = [];
//   let operatorHolder = [];
//   let resultNumbers = [];
//   function sum (total, num) {
//     return total + num;
//   }

//   function numberClicked () {
//     displayNumbers.push(Number(this.innerHTML));
//     document.getElementById('screen').innerHTML = displayNumbers.join('');
//   }

//   function operatorClicked () {
//     operationNumbers.push(Number(displayNumbers.join('')));
//     // operatorHolder.push(this.innerHTML);
//     // console.log(operatorHolder);
//     console.log(operationNumbers);
//     displayNumbers = [];
//     // needs to send which operator was clicked somehow to equalsClicked
//   }

//   function equalsClicked () {
//     operationNumbers.push(Number(displayNumbers.join('')));
//     // console.log(operationNumbers);
//     // if (operatorHolder[0] === '+') {
//       operationNumbers.reduce(sum);
//       document.getElementById('screen').innerHTML = operationNumbers.reduce(sum);
//       resultNumbers.push(operationNumbers.reduce(sum));
//       operationNumbers = [];
//       // operationNumbers.push(resultNumbers[0]);
//       console.log(operationNumbers);
//       // console.log(resultNumbers);
//     // }
//   }

//   document.querySelectorAll('.calcButtonNum').forEach(fn => {fn.addEventListener('click', numberClicked)});
//   document.querySelectorAll('.calcButtonOperator').forEach(fn => {fn.addEventListener('click', operatorClicked)});
//   document.getElementById('calcButtonEquals').addEventListener('click', equalsClicked);
// }

