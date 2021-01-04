"use strict";

// Реализовать секундомер, который подсчитывает время в формате «HH: MM: SS»
// Таймер должен иметь следующие кнопки:
// * «Start / Stop» - запуск / остановка отсчета времени, останавливает и
// обнуляет значение таймера.
// * «Wait» - работает на двойной клик(время между нажатиями не более 300 мс!)
// таймер должен прекратить отсчет времени; если после него нажать старт, то
// возобновляется отсчет.
// * «Reset» - сброс таймера на 0.  Обнуляет таймер и снова начинает отсчет.
var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var hours = document.querySelector("#hours");
var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var toZero = document.querySelector(".toZero");
var sec = 0;
var min = 0;
var hour = 0;
startBtn.addEventListener("click", startstopFunction);
stopBtn.addEventListener("click", waitFunction);
toZero.addEventListener("click", resetFunction);
seconds.textContent = "00";
minutes.textContent = "00";
hours.textContent = "00";

var tick = function tick() {
  sec += 1;
  seconds.textContent = sec + "";

  if (sec === 60) {
    sec = 0;
    min += 1;
    minutes.textContent = min + "";
  }

  if (min === 60) {
    min = 0;
    hour += 1;
    hours.textContent = hour + "";
  }

  if (hour === 5) {
    hour = 0;
  }
};

var timerStep = 0;

function startstopFunction() {
  if (timerStep !== 0) {
    sec = 0;
    min = 0;
    hour = 0;
    clearInterval(timerStep);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    timerStep = 0;
    return;
  }

  timerStep = setInterval(tick, 1);
}

function waitFunction() {
  if (timerStep === 0) {
    return;
  }

  clearInterval(timerStep);
  timerStep = 0;
}

function resetFunction() {
  sec = 0;
  min = 0;
  hour = 0;
  clearInterval(timerStep);
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";
  timerStep = 0;
  timerStep = setInterval(tick, 1);
}