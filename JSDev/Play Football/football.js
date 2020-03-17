let x = [25];
let y = [];
let player = '-Player 1-';
const myFunk = (total, num) => {
  return total + num;
}
const resetDowns = () => {
  y = [];
}
const changePossession = () => {
  x = [25];
  if(player === '-Player 1-') {
    player = '-Player 2-';
  } else
  if(player === '-Player 2-') {
    player = '-Player 1-';
  }
  document.getElementById('Yards').innerHTML = '';
  document.getElementById('Down').innerHTML = '';
  document.getElementById('Scrimmage').innerHTML = '';
  // console.log(player);
}

const runPlay = () => {
    document.getElementById('Player').innerHTML = ('<br>' + player);
    document.getElementById('PoopOrScore').innerHTML = '';
  if(Math.floor(Math.random() * 10) < 8) {
    y.push(Math.round(Math.floor(Math.random() * 100) / 10))
    // console.log(y);
  } else {
    if(Math.floor(Math.random() * 10) < 5) {
      y.push(Math.floor(Math.random() * -10) + 1)
      // console.log(y);
    } else {
    y.push(Math.ceil(((Math.random() * 7) + 1) * 10))
    // console.log(y);
    }
  }
    document.getElementById('Yards').innerHTML += ('<br>' + y[y.length - 1] + ' yards' + '<br>');
    x.push(y[y.length - 1]);
    document.getElementById('Scrimmage').innerHTML = ('<br>' + 'Line of scrimmage: ' + (x.reduce(myFunk)));
  if((x.reduce(myFunk)) >= 100) {
      document.getElementById('PoopOrScore').innerHTML = '<br>' + '----------TOUCHDOWNNNNN----------';
      // console.log('TOUCHDOWNNNNNNN');
      changePossession();
      resetDowns();
    } else
    if(y.reduce(myFunk) >= 10) {
    document.getElementById('Yards').innerHTML += ('<br>' + '----------First Down!----------' + '<br>');
    // console.log('First Down!');
    resetDowns();
  } else {
    if(y.length === 4) {
    document.getElementById('PoopOrScore').innerHTML = '<br>' + 'POOP.';
    // console.log('poop');
    changePossession();
    resetDowns();
  }
  }
  // console.log(x.reduce(myFunk));
}

document.getElementById('btn').addEventListener('click', runPlay);