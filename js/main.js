const secondReal = document.querySelector('.h-second');
const minuteReal = document.querySelector('.h-minute');
const hourReal = document.querySelector('.h-hour');

function realTime() {
    const real = new Date();

    const second = real.getSeconds();
    const secondHand = ((second / 60) * 360) + 90;
    secondReal.style.transform = `rotate(${secondHand}deg)`;

    const minute = real.getMinutes();
    const minuteHand = ((minute / 60) * 360) + ((second/60)*6) + 90;
    minuteReal.style.transform = `rotate(${minuteHand}deg)`;

    const hour = real.getHours();
    const hourHand = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    hourReal.style.transform = `rotate(${hourHand}deg)`;
}

setInterval(realTime, 1000);

realTime();