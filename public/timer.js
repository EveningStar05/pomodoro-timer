
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

export const setTimeLabel = () => {
    switch (session) {
        case "pomo":
            timer_label.textContent = `25:00`;
            break;
        case "break":
            timer_label.textContent = `10:00`;
        default:
            break;
    }
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
    
    if (val < 0) {
        return true; 
        // wait for a button click to start the next session.
        // I think I should create a seperate logic for setting up the time label and start the timer.
        // everytime a session ends, the timer label will be updated to the next session
        // wait for an event then start the next session.
    }

    timer_label.textContent = `${minutes}:${seconds}`;
}

let initPomo = setTime(1);
let initBreak = setTime(10);

export const start = () => {
    let setPomo = setTimer(initPomo--);
    if (setPomo) {
        session = "break";
        setTimeLabel()
    }
}
