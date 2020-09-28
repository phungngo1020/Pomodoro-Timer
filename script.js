var time = document.getElementById("time");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var minutes = 0;
var seconds = 0;
var hours = '';

var interval;

start.addEventListener("click", getTimer);
stop.addEventListener("click", stopTimer);

function getTimer() {
    console.log("Start");
    var str = time.value.split(":");
    if(str.length == 2) {
        minutes = str[0];
        seconds = str[1];
    } else if (str.length == 3) {
        hours = str[0];
        minutes = str[1];
        seconds = str[2];
    } else {
        alert("Please enter a valid time")
    }
    startTimer();
}

function startTimer() {
    interval = setInterval(myTimer, 1000);
}
function stopTimer() {
    console.log("Stop");
    clearInterval(interval);
}

function myTimer() {
    if (seconds > 0) {
        seconds--;
        printTime();
        console.log(minutes + ":" + seconds);
    } else if (seconds == 0) {
        minutes--;
        seconds = 59;
        printTime();
    } else {
        return;
    }
}

function formatTime(time) {
    var ftime = '';
    if (time < 10) {
        ftime = '0' + time;
    } else {
        ftime = time;
    }
    return ftime;
}

function printTime() {
    var fhours = formatTime(hours);
    var fminutes = formatTime(minutes);
    var fseconds = formatTime(seconds);
    
    if (hours == '') {
        time.value = fminutes + ":" + fseconds;
        console.log(fminutes + ":" + fseconds);
    } else if (hours != '') {
        time.value = fhours + ":" + fminutes + ":" + fseconds;
        console.log(fhours + ":" + fminutes + ":" + fseconds);
    } else if (hours < 0) {
        alert("Please enter valid time");
    }
}

