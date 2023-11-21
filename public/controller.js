import {
    start,
    setTimeLabel,
    timerInterval,
    reset
} from "./timer.js"

const start_btn_audio = new Audio("./audio/mixkit-correct-answer-tone-2870.wav");
const stop_btn_audio = new Audio("./audio/mixkit-losing-bleeps-2026.wav");

let buttons = document.querySelectorAll("button");
let btn_toggle = false;

setTimeLabel()

export let reset_button = () => {
    let restart = document.querySelector("button#start-btn");
    restart.innerHTML = "Start"
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (Event) => {
        btn_toggle = !btn_toggle; // true or false
        switch (buttons[i].innerHTML) {
            case "Start":
                start()
                start_btn_audio.play();
                buttons[i].innerHTML = "Pause"
                break;
            case "Pause":
                reset_button()
                clearInterval(timerInterval);
                break;
            case "Stop":
                stop_btn_audio.play();
                reset() // reset the timer value
                reset_button()
                clearInterval(timerInterval);
                break;
            default:
                break;
        }
    })

    buttons[i].addEventListener("dblclick", () => {
        buttons[i].disabled = true;
        setTimeout(function() {
            buttons[i].disabled = false;
        }, 2000)
    })
}