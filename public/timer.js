
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
let session = "pomo";

const setTime = (val) => val * 60;

function setTimer(val) {
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
    
    if (val < 0) {
        // clearInterval(timeInterval); // stop the timer
        return true;
    }

    timer_label.textContent = `${minutes}:${seconds}`;
}

let initPomo = setTime(1);
let initBreak = setTime(10);

export const start = () => {
    switch (session) {
        case "pomo":
            let setPomo = setTimer(initPomo--);
            if (setPomo) session = "break";
            break;
        case "break":
            setTimer(initBreak--);
        default:
            break;
    }
}

// export let timeInterval = setInterval(start, 1000); 
