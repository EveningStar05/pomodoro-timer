
// Note: KEEPING IT SMALL. TIME LIMIT 2 DAYS.

// Requirements:
// 1. Only use Vanilla HTML, CSS and Javascript (DOM Manipulation)
// 2. You can see some tutorials just to inspire you, but don't follow it. Try doing it by yourself.

// pseudocode:
// 1. set init value to be 25.
// 2. set break value to be 10.
// 3. For every end of main timer, count cycle as 1.
// 4. repeat the process. 


function setTime(val) { 
    let time = val * 60;
    return time;
}

let initPomo = setTime(25);
let initBreak = setTime(10);
let timer_status = "pomo"

setInterval(function() {
    let minutes = Math.floor(initPomo/60);
    let seconds = initPomo % 60;

    initPomo--

    console.log(minutes. seconds)
}, 1000);

