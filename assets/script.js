const countTime = new Date("Aug 16,2023 04:00:00").getTime();

function newYear() {
    const now = new Date().getTime();
    let gap = countTime - now;
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let day = Math.floor(gap / days);
    let hour = Math.floor((gap % days) / hours);
    let minute = Math.floor((gap % hours) / minutes);
    let second = Math.floor((gap % minutes) / seconds);

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}

setInterval(function(){
    newYear()
},1000);