document.getElementById("date").innerHTML = new Date().toLocaleDateString();
const timeElem = document.getElementById("time");

setInterval(() => {
  const date = new Date();
  var time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  timeElem.innerHTML = time;

  if (
    (date.getHours() == 15 && date.getMinutes() >= 20) ||
    date.getHours() > 15
  ) {
    document.body.innerHTML =
      "<div id='end'><h1>Stunde ist zu Ende!</h1></div>";
  }
}, 1000);
