import {
    start,
    setTimeLabel,
    timerInterval,
    reset,
    timerCompleted
} from "./timer.js"

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
                buttons[i].innerHTML = "Pause"
                break;
            case "Pause":
                // buttons[i].innerHTML = "Start";
                reset_button()
                clearInterval(timerInterval);
                break;
            case "Stop":
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