function timer() {
    let timer = null;
    let time = 0;
    let isOn = false;

    $('#start-timer').click(startTimer);
    $('#stop-timer').click(stopTimer);

    function startTimer() {
       if (!isOn) {
           timer = setInterval(step, 1000);
           isOn = true;
       }
    }

    function stopTimer() {
        clearInterval(timer);
        isOn = false;
    }
    
    function step() {
        time++;
        let hours = ('0' + Math.trunc(time / 3600)).slice(-2);
        let minutes = ('0' + Math.trunc((time / 60) % 60)).slice(-2);
        let seconds = ('0' + Math.trunc(time % 60)).slice(-2);

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }
}