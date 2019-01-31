const secondTime = document.querySelector(".h-second");
const minuteTime = document.querySelector(".h-minute");
const hourTime = document.querySelector(".h-hour");

const currentDate = document.querySelector(".current-date");


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


function realDate() {
    
    today = new Date();
    
    const dd = today.getDay();
    const mm = today.getMonth() + 1;  //Januar
    const yy = today.getYear();
    
    currentDate = document.getElementById(".current-date").innerHTML = dd + "-" + mm + "-" + yy; 
}

setInterval(realDate, 1000);
setInterval(realTime, 1000);

realDate();
realTime();
