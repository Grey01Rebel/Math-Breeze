const display = document.getElementById("display");
const resultText = document.getElementById("result");

function appendToDisplay (input) {
    display.value += input;
    evaluateCalculation();
}

function evaluateCalculation() {
    try {
        const calculation = display.value;
        const result = eval(calculation);
        resultText.textContent = `${result}`;
    } catch (error) {
        resultText.textContent = "";

    }
}

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

function calculate() {

    try {

    display.value = eval(display.value);

    } catch (error) {

    display.value = "Syntax Incomplete"

    }

}

function clearDisplay() {
    display.value = "";
    resultText.textContent = "";
}