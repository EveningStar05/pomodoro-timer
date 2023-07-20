import {
    start,
    setTimeLabel
} from "./timer.js"

let inner_circle = document.querySelector("div.inner-circle");
let buttons = document.querySelectorAll("button");
let btn_stats = false;
let timerInterval;

setTimeLabel()

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", (Event) => {

        if (Event.target.id === "pause-or-play-btn") {

            btn_stats = !btn_stats;

            if (btn_stats) { // start
                timerInterval = setInterval(() => {
                    start();
                }, 1000);
            } else { // pause
                clearInterval(timerInterval)
            }
        }
    })
}