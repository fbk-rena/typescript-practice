"use strict";
function countdown(seconds) {
    if (countdown.interval) {
        let current = seconds;
        const id = setInterval(() => {
            console.log(current--);
            if (current < 0)
                clearInterval(id);
        }, 1000);
    }
    else {
        console.log(`Iniciando cuenta regresiva de ${seconds} segundos`);
    }
}
countdown.interval = true;
countdown.name = "Countdown Function";
const myTimer = countdown;
myTimer(5);
