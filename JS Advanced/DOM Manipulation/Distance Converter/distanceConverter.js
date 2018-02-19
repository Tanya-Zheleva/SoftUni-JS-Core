function attachEventsListeners() {
    let units = new Map();
    units.set('m', 1);
    units.set('km', 1000);
    units.set('cm', 0.01);
    units.set('mm', 0.001);
    units.set('mi', 1609.34);
    units.set('yrd', 0.9144);
    units.set('ft', 0.3048);
    units.set('in', 0.0254);

    let inputBtn = document.getElementById('convert');
    inputBtn.addEventListener('click', convert);

    function convert() {
        let inputDist = document.getElementById('inputDistance').value;
        let inputUnit = document.getElementById('inputUnits').value;
        let result = document.getElementById('outputDistance');
        let outputUnit = document.getElementById('outputUnits').value;

        let inputMeters = units.get(inputUnit) * inputDist;
        let outputMeters = inputMeters / units.get(outputUnit);

        result.value = outputMeters.toFixed(3);
    }
}
