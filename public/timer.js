const timer_label = document.querySelector("#timer-label");
const status_label = document.querySelector("p#session-label")

const setTime = (val) => val * 60;
let session = "work";

export let timerCompleted = false;

export const setTimeLabel = () => {
    switch (session) {
        case "work":
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

let initwork = setTime(25);
let initBreak = setTime(10);

export let reset = () => { // resets the timer back to 25.
    session = "work";
    setTimeLabel()
    initwork = setTime(25);
}

export const start = () => {
    timerInterval = setInterval(function() {
        timerCompleted = false;
        switch (session) {
            case "work":
                setTimer(initwork--);
                break;
            case "break":
                setTimer(initBreak--);
                break;
            default:
                break;
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
        timerCompleted = true;
        clearInterval(timerInterval);

        if (session === "work") {
            session = "break";
        }
        setTimeLabel()
    }
}
