console.log("this is clock");

function updateClock() {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();

//   let timeOfDay = currentHour < 12 ? "AM" : "PM";
  let currentTimeStr = currentHour + ":" + currentMinute + ":" + currentSecond 

  document.getElementById('clock').innerHTML = currentTimeStr
}
