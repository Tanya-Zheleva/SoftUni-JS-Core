function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradMove);
    gradient.addEventListener('mouseout', gradOut);
    
    function gradMove(event) {
        console.dir(event);

        let x = event.offsetX;
        let width = event.target.clientWidth - 1;
        let percent = Math.trunc((x / width) * 100);

        document.getElementById('result').textContent = percent + '%';
    }
    
    function gradOut(event) {
        document.getElementById('result').textContent = '';
    }
}