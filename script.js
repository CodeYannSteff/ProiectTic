document.addEventListener("DOMContentLoaded", function () {
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const outputBulb = document.getElementById('output-bulb');
    const lineA = document.getElementById('lineA');
    const lineB = document.getElementById('lineB');
    const connector = document.getElementById('connector');
    const outputLine = document.getElementById('output-line');

    function updateCircuit() {
        if (inputA.checked && inputB.checked) {
            // Both inputs ON: Activate the circuit
            lineA.classList.add('active');
            lineB.classList.add('active');
            connector.classList.add('active');
            outputLine.classList.add('active');
            outputBulb.classList.add('on');
        } else {
            // One or both inputs OFF: Deactivate the circuit
            lineA.classList.remove('active');
            lineB.classList.remove('active');
            connector.classList.remove('active');
            outputLine.classList.remove('active');
            outputBulb.classList.remove('on');
        }
    }

    inputA.addEventListener('change', updateCircuit);
    inputB.addEventListener('change', updateCircuit);
});

