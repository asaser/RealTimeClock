const secondTime = document.querySelector(".h-second");
const minuteTime = document.querySelector(".h-minute");
const hourTime = document.querySelector(".h-hour");

const showRealTime = document.querySelector(".show-real-time");

function realTime() {
    
    const sec = new Date().getSeconds();
    const min = new Date().getMinutes();
    const hour = new Date().getHours();
    
    const sec2 = ((sec / 60) * 360) + 90;
    const min2 = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
    const hour2 = ((hour / 12) * 360) + ((min / 60) * 30) + 90;

    secondTime.style.transform = `rotate(${sec2}deg)`;
    minuteTime.style.transform = `rotate(${min2}deg)`;
    hourTime.style.transform = `rotate(${hour2}deg)`;
}


function digitalCloak() {
    
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();

    s = (s < 10) ? "0" + s : s;
    m = (m < 10) ? "0" + m : m;
    h = (h < 10) ? "0" + h : h;

    const showTimeOfDay = h + ":" + m + ":" + s; 

    showRealTime.innerHTML = showTimeOfDay;
}

setInterval(realTime, 1000);
setInterval(digitalCloak, 1000);

realTime();
digitalCloak();
