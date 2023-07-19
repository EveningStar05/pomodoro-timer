import {start} from "./timer.js"

let inner_circle = document.querySelector("div.inner-circle");

inner_circle.addEventListener("click", () => {
    // console.log("Hello");
    start()
})