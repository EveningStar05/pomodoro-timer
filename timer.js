
// Note: KEEPING IT SMALL. TIME LIMIT 2 DAYS.

// Requirements:
// 1. Only use Vanilla HTML, CSS and Javascript (DOM Manipulation)
// 2. You can see some tutorials just to inspire you, but don't follow it. Try doing it by yourself.

// pseudocode:
// 1. set init value to be 25.
// 2. set break value to be 10.
// 3. For every end of main timer, count cycle as 1.
// 4. repeat the process. 

let session = "pomodoro";
const timer_label = document.querySelector("p.timer-label");

function setTime(val) {
    let time = val * 60;
    return time
}

let initPomo = setTime(25);
let initBreak = setTime(10)

function setTimer(val) {
    let minutes = Math.floor(val/60);
    let seconds = val % 60;
    initPomo--

    if (minutes < 10) {
        minutes = "0" + minutes
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
        clearInterval(timeInterval);
        return true; // timer completed
    }

    timer_label.innerHTML = `${minutes}:${seconds}`
}

export const start = () => {
    timer_label.textContent = "Hello World"
    // let setPomodoro = setTimer(initPomo);
    // let setBreak = setTimer(initBreak);

    // TODO: Switching sessions each completed one. 
}

const timeInterval = setInterval(start, 1000);