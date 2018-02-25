function stopwatch() {
    let output = document.getElementById('time');

    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startPressed);
    let stopBtn = document.getElementById('stopBtn');
    stopBtn.addEventListener('click', stopPressed);

    let timer = null;
    let seconds = 0;

    function outputTime(value) {
        output.textContent = ('0' + Math.trunc(value / 60)).slice(-2) + ':' + ('0' + value % 60).slice(-2);
    }

    function tick() {
        seconds++;
        outputTime(seconds);
    }

    function startPressed() {
        seconds = 0;
        outputTime(seconds);
        stopBtn.disabled = false;
        startBtn.disabled = true;
        timer = setInterval(tick, 1000);
    }

    function stopPressed() {
        stopBtn.disabled = true;
        startBtn.disabled = false;
        clearInterval(timer);
    }
}