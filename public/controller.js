import {
    start,
    setTimeLabel,
    timerInterval,
    reset
} from "./timer.js"

let inner_circle = document.querySelector("div.inner-circle");
let buttons = document.querySelectorAll("button");
let btn_toggle = false;

setTimeLabel()

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (Event) => {
        btn_toggle = !btn_toggle;
        switch (Event.target.id) {
            case "start-btn":
                start()
                break;
            case "pause-btn":
                clearInterval(timerInterval);
                break;
            case "stop-btn": // resets the timer back to 25
                reset()
                clearInterval(timerInterval);
            default:
                break;
        }
    }, {once: false})
}