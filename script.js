const display = document.getElementById("display");
const resultText = document.getElementById("result");

function appendToDisplay (input) {
    display.value += input;
    evaluateCalculation();
}

/* This function updates the calculation as the user, and will 
provide an empty string if a calculation is yet to be complete. */

function evaluateCalculation() {
    try {
        const calculation = display.value;
        const result = eval(calculation);
        resultText.textContent = `${result}`;
    } catch (error) {
        resultText.textContent = "";

    }
}
// delete button
function delLastChar() {
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
    if (display.value.trim() !== "") {
        evaluateCalculation();
    }
    else {
        resultText.textContent = "";
    }
}
// Equal to button
function calculate() {

    try {

    display.value = eval(display.value);

    } catch (error) {

    display.value = "Syntax Incomplete"

    }

}
// clear button
function clearDisplay() {
    display.value = "";
    resultText.textContent = "";
}

document.addEventListener('keydown', function(char) {
    const key = char.key;

    // Handle numbers and operators
    if (!isNaN(key) || ['+', '-', '*', '/','.'].includes(key)) {
        appendToDisplay(key);
    }

    // Enter = equals
    else if (key === 'Enter' || key === '=') {
        char.preventDefault(); // Prevents form submission if any
        calculate();
    }

    // Backspace = delete last character
    else if (key === 'Backspace') {
        delLastChar();
    }

    // Escape = clear all
    else if (key === 'Escape') {
        clearDisplay();
    }
});
