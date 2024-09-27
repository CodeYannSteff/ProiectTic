document.addEventListener("DOMContentLoaded", function () {
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const outputBulb = document.getElementById('output-bulb');
    const lineA = document.getElementById('lineA');
    const lineB = document.getElementById('lineB');
    const connector = document.getElementById('connector');
    const outputLine = document.getElementById('output-line');

    function updateCircuit() {
        // NAND gate logic: Output is ON unless both inputs are ON
        if (inputA.checked && inputB.checked) {
            // Both inputs ON: Deactivate the circuit (Output is OFF)
            lineA.classList.add('active');
            lineB.classList.add('active');
            connector.classList.add('active');
            outputLine.classList.add('active');
            outputBulb.classList.remove('on'); // Bulb OFF
        } else {
            // One or both inputs OFF: Activate the circuit (Output is ON)
            lineA.classList.add('active');
            lineB.classList.add('active');
            connector.classList.add('active');
            outputLine.classList.add('active');
            outputBulb.classList.add('on'); // Bulb ON
        }
    }

    // Call updateCircuit on page load to set the output ON
    updateCircuit();

    // Add event listeners for the input changes
    inputA.addEventListener('change', updateCircuit);
    inputB.addEventListener('change', updateCircuit);
});

