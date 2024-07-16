function calculateEMI(principal, annualRate, years) {
    const monthlyRate = annualRate / 12 / 100;
    const numberOfPayments = years * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return emi.toFixed(2);
}
document.getElementById('emi-form').onsubmit = function(event) {
    event.preventDefault();
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);
    document.getElementById('emi-result').innerText = `Your EMI is ₹${calculateEMI(principal, rate, years)} per month.`;
};