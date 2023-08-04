// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function setTime()
{
    time++;
    counterElement.innerHTML = time;
}

const intervalId = setInterval(setTime, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 7000);
