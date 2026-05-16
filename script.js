function sendCommand(direction) {

  document.getElementById("status").innerHTML =
    "Status: " + direction.toUpperCase();

  console.log(direction);

}
