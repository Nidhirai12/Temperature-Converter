function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("temperature").value);
    const selectedUnit = document.getElementById("unit").value;

    let resultTemperature, resultUnit;

    if (selectedUnit === "celsius") {
        resultTemperature = (inputTemperature - 32) * (5 / 9);
        resultUnit = " °C";
    } else {
        resultTemperature = (inputTemperature * 9 / 5) + 32;
        resultUnit = "°F";
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Result: ${resultTemperature.toFixed(2)} ${resultUnit}`;
}
