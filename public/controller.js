import {start} from "./timer.js"

let inner_circle = document.querySelector("div.inner-circle");

let start_btn = document.querySelector("button#pause-or-play-btn");
let btn_stats = false;
let timerInterval;

start_btn.addEventListener("click", () => {
    btn_stats = !btn_stats;

    if (btn_stats) { // start
        timerInterval = setInterval(() => {
            start();
        }, 1000);

    } else { // pause
        clearInterval(timerInterval)
    }
})
