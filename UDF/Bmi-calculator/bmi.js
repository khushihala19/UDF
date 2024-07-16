function calculateBMI(weight, heightCm) {
    const heightMeters = heightCm / 100;
    const bmi = weight / (heightMeters * heightMeters);
    return bmi.toFixed(2);
}
document.getElementById('bmi-form').onsubmit = function(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    document.getElementById('bmi-result').innerText = `Your BMI is ${calculateBMI(weight, height)}.`;
};