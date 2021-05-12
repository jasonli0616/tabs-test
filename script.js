var winIsActive = true;
var timesSwitched = 0;
var p = document.getElementById('p');

function inactive() {
    winIsActive = false;
    timesSwitched += 1;
}

function active() {
    winIsActive = true;
    p.innerHTML = `<br>You switched to a different tab ${timesSwitched} times`;
}