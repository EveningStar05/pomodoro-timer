import {
    start,
    setTimeLabel,
    timerInterval, 
    timerRunning
} from "./timer.js"

let inner_circle = document.querySelector("div.inner-circle");
let buttons = document.querySelectorAll("button");
let btn_stats = false;

setTimeLabel()

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", (Event) => {
        if (Event.target.id === "pause-or-play-btn") { 
            start()
        } else {
            setTimeLabel()
            clearInterval(timerInterval)
            timerInterval;
        }
    })
}