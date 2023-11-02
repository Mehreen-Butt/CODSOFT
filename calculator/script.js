
const display = document.getElementById("display");
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = evaluateExpression(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function evaluateExpression(expression) {
    try {
        const result = math.evaluate(expression);
        return result.toString();
    } catch (error) {
        throw new Error("Invalid expression");
    }
}
