import { reset_button } from "./controller.js";

const magical_bell = new Audio("./audio/mixkit-bike-magical-bell-591.wav");
const fairy_bell = new Audio("./audio/mixkit-fairy-bells-583.wav");

const timer_label = document.querySelector("#timer-label");
const status_label = document.querySelector("p#session-label")

const setTime = (val) => val * 60;
let session = "work";

// Todo: make the setinterval to start immediately.

export const setTimeLabel = () => {
    switch (session) {
        case "work":
            timer_label.textContent = `25:00`;
            status_label.textContent = "Start!"; 
            break;
        case "break":
            timer_label.textContent = `10:00`;
            status_label.textContent = "Break time!"; 
        default:
            break;
    }
}

export let timerInterval;
export let timerCompleted = false;

let initWork = setTime(25);

export let reset = () => { // resets the timer back to 25.
    session = "work";
    setTimeLabel();
    initWork = setTime(25);
}

export const start = () => {
    timerCompleted = false;
    // clearInterval(timerInterval);
    timerInterval = setInterval(function startPomodoroTimer() {
        setTimer(initWork--);
        return startPomodoroTimer;
    }, 1000)
}

const setTimer = (val) => {
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
        if (session === "work") {
            session = "break";
            initWork = setTime(10);
            fairy_bell.play()

        } else {
            session = "work";
            initWork = setTime(25);
            magical_bell.play()
        }

        clearInterval(timerInterval); 
        reset_button();
        setTimeLabel();
    }
}