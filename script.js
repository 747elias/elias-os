function updateTime() {
  var justnumbers = new Date().toLocaleString();
  var timeText = document.querySelector("#timelEment");
  timeText.innerHTML = justnumbers;
}
setInterval(updateTime, 1000);

// Macht das DIV-Element ziehbar:
dragElement(document.getElementById("welcome"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Prüft, ob es ein Header-Element (z.B. "welcomeheader") gibt
  if (document.getElementById(element.id + "header")) {
    // Wenn ja, wird NUR der Header als Griff benutzt
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Wenn nein, kann man das ganze Fenster anfassen
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag; // Hier hieß es vorher fälschlicherweise "dragElement"
  }

  // Diese Funktion wurde umbenannt, damit es keinen Konflikt gibt
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = element.offsetTop - currentY + "px";
    element.style.left = element.offsetLeft - currentX + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreen = document.querySelector("#welcome");
function closeWindow(element) {
  element.style.display = "none";
}
function openWindow(element) {
  element.style.display = "block";
}
var welcomeScreenClose = document.querySelector("#welcomeclose");

var welcomeScreenOpen = document.querySelector("#welcomeopen");
welcomeScreenClose.addEventListener("click", function () {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
  openWindow(welcomeScreen);
});
