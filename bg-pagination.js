var container = document.getElementById("videobox");

var bg1 = document.getElementById("bg-1");
bg1.addEventListener("click", setBg1);
function setBg1() {
    container.innerHTML = '<video autoPlay="true" muted="true" loop="true" id="myVideo"><source src="./waves.mp4" type="video/mp4" /></video>'
    return;
}

var bg2 = document.getElementById("bg-2");
bg2.addEventListener("click", setBg2);
function setBg2() {
    container.innerHTML = '<video autoPlay="true" muted="true" loop="true" id="myVideo"><source src="./clouds.mp4" type="video/mp4" /></video>'
    return;
}

var bg3 = document.getElementById("bg-3");
bg3.addEventListener("click", setBg3);
function setBg3() {
    container.innerHTML = '<video autoPlay="true" muted="true" loop="true" id="myVideo"><source src="./flowers.mp4" type="video/mp4" /></video>'
    return;
}

var bg4 = document.getElementById("bg-4");
bg4.addEventListener("click", setBg4);
function setBg4() {
    container.innerHTML = '<video autoPlay="true" muted="true" loop="true" id="myVideo"><source src="./sunset.mp4" type="video/mp4" /></video>'
    return;
}