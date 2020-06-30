var hours = document.getElementById("hours");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;
    clock(seconds,secondRatio);
    clock(minute,minutesRatio);
    clock(hours,hoursRatio);

}
function clock(element,rotationRatio) {

    element.style.setProperty('--rotation',rotationRatio*360);

}
setInterval(setClock,1000);