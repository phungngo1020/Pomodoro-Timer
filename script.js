var time = document.getElementById("time");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var timeTitle = document.getElementById("time-title");

var minutes = 0;
var seconds = 0;
var hours = '';

var interval;

var workTime = true;

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
    return;
}

function myTimer() {
    if (hours == 0 && minutes == 0 && seconds == 0) {
        workTime = !workTime;
        console.log(workTime);
        if (workTime == true) {
            timeTitle.innerHTML = "Work Time!";
            clearInterval(interval);
            time.value = "25:00";
            return;
        } else {
            timeTitle.innerHTML = "Break Time!";
            clearInterval(interval);
            time.value = "05:00";
            return;
        }
    }
    if (hours >= 0 && minutes >= 0 && seconds > 0) {
        seconds--;
        printTime();
        console.log(minutes + ":" + seconds);
    } else if (hours >= 0 && minutes > 0 && seconds == 0) {
        minutes--;
        seconds = 59;
        printTime();
    } else {
        return;
    }
}

function formatTime(time) {
    var ftime = '';
    var valAsString = time.toString();
    // if (time < 10) {
    if (valAsString.length === 1) {
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

