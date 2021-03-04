

var timer = document.querySelector('.order-timer');
var timeLeft = 30*60*1000;


var timerCalc = setInterval(function() {


  var minutes = Math.floor(timeLeft / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  timer.innerHTML = minutes + "м " + seconds + "с ";

  if (timeLeft < 0) {
    clearInterval(timerCalc);
    timer.innerHTML = "Акция закончилась!";
  }
  timeLeft-=1000;
}, 1000);
