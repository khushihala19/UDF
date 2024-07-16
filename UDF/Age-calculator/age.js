function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
document.getElementById('age-form').onsubmit = function(event) {
    event.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    document.getElementById('age-result').innerText = `Your age is ${calculateAge(birthdate)} years.`;
};