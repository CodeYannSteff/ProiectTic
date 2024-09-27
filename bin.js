document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.getElementById('convertButton');
    const terminalOutput = document.getElementById('terminalOutput');
    const textInput = document.getElementById('textInput');

    // Function to convert text to binary
    function textToBinary(text) {
        return text.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0'); // Convert to 8-bit binary
        }).join(' ');
    }

    // Function to create a span for each binary digit
    function createBinarySpan(char) {
        const span = document.createElement('span');
        if (char === ' ') {
            span.textContent = ' '; // Preserve spaces
        } else {
            span.classList.add('binary-cycle');
            span.textContent = '0'; // Initial value
        }
        return span;
    }

    // Function to animate binary conversion
    async function animateBinary(binaryText) {
        terminalOutput.innerHTML = ''; // Clear previous output
        const binaryChars = binaryText.split('');

        for (let i = 0; i < binaryChars.length; i++) {
            const char = binaryChars[i];
            const span = createBinarySpan(char);
            terminalOutput.appendChild(span);
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll to bottom

            if (char !== ' ') {
                // Start cycling animation
                await new Promise(resolve => {
                    setTimeout(() => {
                        span.classList.remove('binary-cycle');
                        span.textContent = char; // Set to actual binary digit
                        resolve();
                    }, 200); // 0.5 seconds per digit
                });
            } else {
                // Add a slight delay for spaces
                await new Promise(resolve => {
                    setTimeout(resolve, 200);
                });
            }
        }
    }

    // Event listener for convert button
    convertButton.addEventListener('click', function () {
        const inputText = textInput.value.trim();
        if (inputText === '') {
            alert('Vă rugăm să introduceți un text pentru conversie.');
            return;
        }
        const binaryText = textToBinary(inputText);
        animateBinary(binaryText);
    });

    // Dynamic Menu Highlighting
    const menuItems = document.querySelectorAll('.menu-item');
    const currentPage = window.location.pathname.split('/').pop(); // Get the current file name

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

