const year = document.querySelector('#year');
const currentYear = new Date().getFullYear();
year.innerText = currentYear + 1;
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
function updateCountdown() {
  const currentTime = new Date();
  const difference = nextYear - currentTime;
  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
  const secondsLeft = Math.floor(difference / 1000) % 60;
  days.innerText = daysLeft;
  hours.innerText = hoursLeft;
  minutes.innerText = minutesLeft;
  seconds.innerText = secondsLeft;
}
updateCountdown();

setInterval(updateCountdown, 1000);
