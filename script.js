let seconds = 300;
let interval;
let running = false;

function formatTime(sec) {
const m = String(Math.floor(sec / 60)).padStart(2, '0');
 const s = String(sec % 60).padStart(2, '0');
return `${m}:${s}`;
}

function updateTime() {
document.getElementById('time').textContent = formatTime(seconds);
}

function start() {
if (running || seconds <= 0) return;
 running = true;
interval = setInterval(() => {
if (seconds > 0) {
 seconds--;
 updateTime();
 } else {
pause();

           }   
}, 1000);
      }

    function pause() {
       
        running = false;
clearInterval(interval);
}

function reset() {
 pause();
 seconds = 300;
updateTime();
}


updateTime();
