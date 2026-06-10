function updateTime() {
  var justnumbers = new Date().toLocaleString();
  var timeText = document.querySelector("#timelEment");
  timeText.innerHTML = justnumbers;
}
setInterval(updateTime, 1000);
