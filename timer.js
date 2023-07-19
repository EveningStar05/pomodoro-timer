
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
    return time
}

let initPomo = setTime(1);

function setTimer(val) {
    // const timer_label = document.querySelector("p.timer-label"); 
    let minutes = Math.floor(val/60);
    let seconds = val % 60;
    initPomo--
    
    if (seconds < 10 || seconds === 0) {
        seconds = "0" + seconds;
    } else if (minutes < 10 || minutes === 0) {
        minutes = "0" + minutes
    }
    
    if (seconds === 0) {
        minutes -= 1;
    }
    
    if (minutes === "00" && seconds === "00") {
        return;
    }
}

const start = () => {
    setTimer(initPomo)
}

setInterval(start, 1000);