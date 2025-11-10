   
        let currentValue = '0';
        let previousValue = null;
        let operator = null;
        let waitingForNewValue = false;

        function updateDisplay() {
            const display = document.getElementById('display');
            display.textContent = currentValue;
        }

        function appendNumber(num) {
            if (waitingForNewValue) {
                currentValue = num;
                waitingForNewValue = false;
            } else {
                if (currentValue === '0' || currentValue === '0000') {
                    currentValue = num;
                } else {
                    currentValue += num;
                }
            }
            updateDisplay();
        }

        function appendDecimal() {
            if (waitingForNewValue) {
                currentValue = '0.';
                waitingForNewValue = false;
            } else if (!currentValue.includes('.')) {
                currentValue += '.';
            }
            updateDisplay();
        }

        function clearAll() {
            currentValue = '0';
            previousValue = null;
            operator = null;
            waitingForNewValue = false;
            updateDisplay();
        }

        function clearEntry() {
            currentValue = '0';
            updateDisplay();
        }

        function percentage() {
            currentValue = (parseFloat(currentValue) / 100).toString();
            updateDisplay();
        }

        function setOperator(op) {
            if (operator !== null && !waitingForNewValue) {
                calculate();
            }
            previousValue = currentValue;
            operator = op;
            waitingForNewValue = true;
        }

        function calculate() {
            if (operator === null || previousValue === null) {
                return;
            }

            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);
            let result;

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '×':
                    result = prev * current;
                    break;
                case '÷':
                    result = current !== 0 ? prev / current : 'Error';
                    break;
                default:
                    return;
            }

            currentValue = result.toString();
            operator = null;
            previousValue = null;
            waitingForNewValue = true;
            updateDisplay();
        }

        function useResult() {
            // This function would integrate with your main application
            alert('Result: ' + currentValue + '\n\nThis would be used in your main app!');
            // You can add code here to pass the result to another form or component
        }

        // Close button functionality
        document.querySelector('.close-btn').addEventListener('click', function() {
            alert('Calculator closed');
            // You can add code here to hide the calculator modal
        });

        // Initialize display
        updateDisplay();
    