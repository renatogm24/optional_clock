function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let degrees = 180;

setInterval(function () {
  let hourDegrees = degrees + (360 / 12) * new Date().getHours();
  hour.style.webkitTransform = "rotate(" + hourDegrees + "deg)";
  let minuteDegrees = degrees + (360 / 60) * new Date().getMinutes();
  minutes.style.webkitTransform = "rotate(" + minuteDegrees + "deg)";
  let secondsDegrees = degrees + (360 / 60) * new Date().getSeconds();
  seconds.style.webkitTransform = "rotate(" + secondsDegrees + "deg)";
}, 1000);
