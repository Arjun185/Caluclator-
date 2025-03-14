function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmiResult').textContent = "Please enter valid weight and height.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').textContent = `BMI: ${bmi}`;
}

function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();

    if (isNaN(dob.getTime())) {
        document.getElementById('ageResult').textContent = "Please enter a valid date of birth.";
        return;
    }

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (days < 0) { months--; days += 30; }
    if (months < 0) { years--; months += 12; }

    document.getElementById('ageResult').textContent = `${years} Years, ${months} Months, ${days} Days`;
}

function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value) || 0;
    const months = parseInt(document.getElementById('months').value) || 0;
    const days = parseInt(document.getElementById('days').value) || 0;

    if (isNaN(principal) || isNaN(rate) || principal <= 0 || rate <= 0) {
        document.getElementById('interestResult').textContent = "Please enter valid principal and rate.";
        return;
    }

    const time = years + (months / 12) + (days / 365);
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    document.getElementById('interestResult').textContent = `Principal: ₹${principal.toFixed(2)} | Interest: ₹${interest.toFixed(2)} | Total: ₹${totalAmount.toFixed(2)}`;
}

function calculateEMI() {
    const P = parseFloat(document.getElementById('loanAmount').value);
    const r = parseFloat(document.getElementById('loanRate').value) / 1200;
    const n = parseInt(document.getElementById('loanTenure').value);

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
        document.getElementById('emiResult').textContent = "Please enter valid loan details.";
        return;
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById('emiResult').textContent = `EMI: ₹${emi.toFixed(2)}`;
}
