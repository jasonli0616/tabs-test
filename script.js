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
    if (timesSwitched == 1) {
        p.innerHTML = `<br>You switched to a different tab ${timesSwitched} time`;
    }
}

function reset() {
    timesSwitched = 0;
    p.innerHTML = `<br>You switched to a different tab 0 times`;
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('mobileText').style.visibility = 'visible';
}