var winIsActive = false;
var timesSwitched = 0;

timer = setInterval(function() {
    check();
}, 900);


function check() {
    if (winIsActive) {
        winIsActive = false;
        timesSwitched += 1;
        window.addEventListener('blur', function() {
            let p = document.getElementById('p');
        });
    }
    
    else {
        winIsActive = true;
        window.addEventListener('focus', function() {
            let p = document.getElementById('p');
            p.innerHTML = `<br>You switched to a different tab ${timesSwitched} times`;
        });
    }
    
}