
// Note: KEEPING IT SMALL. TIME LIMIT 2 DAYS.

// Requirements:
// 1. Only use Vanilla HTML, CSS and Javascript (DOM Manipulation)
// 2. You can see some tutorials just to inspire you, but don't follow it. Try doing it by yourself.

// pseudocode:
// 1. set init value to be 25.
// 2. set break value to be 10.
// 3. There are: pause, play and stop button to interact
// 4. Every time the cycle ends (when timer hits 0) it will set to the next cycle.

const timer_label = document.querySelector("#timer-label");
const status_label = document.querySelector("p#session-label")
let session = "pomo";

export let timerRunning = false;

const setTime = (val) => val * 60;

export const setTimeLabel = () => {
    switch (session) {
        case "pomo":
            timer_label.textContent = `25:00`;
            status_label.textContent = "Start!"
            break;
        case "break":
            timer_label.textContent = `10:00`;
            status_label.textContent = "Break time!"
        default:
            break;
    }
}

export let timerInterval;

export const start = () => {

    let initPomo = setTime(1);
    let initBreak = setTime(10);

    timerInterval = setInterval(function() {
        timerRunning = true;
        if (session === "pomo") {
            setTimer(initPomo--);
        } else {
            setTimer(initBreak--);
        }
    }, 1000)
}

const  setTimer = (val) => {
    
    let minutes = Math.floor(val/60);
    let seconds = val % 60;

    if (minutes < 10) {
        minutes = "0" + minutes;
    } else if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10 && seconds < 10 || seconds === 0) {
        seconds = "0" + seconds; 
    }
    
    if (seconds === 0) {
        minutes -= 1;
    }

    timer_label.textContent = `${minutes}:${seconds}`;
    
    if (val <= 0) {
        clearInterval(timerInterval);
        if (session === "pomo") {
            session = "break";
        }

        timerRunning = false;
        setTimeLabel()
    }
}
