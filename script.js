let timePara = document.getElementById("time");
const hrHand = document.getElementById("hour");
const minHand = document.getElementById("minute");
const secHand = document.getElementById("second");

let time;
let hrHandRotate;
let minHandRotate;
let secHandRotate;

setInterval(() => {
    updateTime();
}, 1);

function updateTime(){
    time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let ms = time.getMilliseconds();
    hrHandRotate = 0.5*minute + (hour*30);
    minHandRotate = (1/10)*second + (minute*6);
    secHandRotate = 0.006*ms+second*6;
    timePara.innerHTML= hour + ":" + minute + ":" + second +  ":" + Math.floor(ms/100);
    rotateHand();
}

function rotateHand(){
    hrHand.style.transform="rotate(" + hrHandRotate + "deg)";
    minHand.style.transform="rotate(" + minHandRotate + "deg)";
    secHand.style.transform="rotate(" + secHandRotate + "deg)";
}