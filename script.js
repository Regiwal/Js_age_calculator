function calculateAge() {
    const dobInput = document.getElementById('dob-input').value;
    const resultElement = document.getElementById('result');

    if (!dobInput) {
        resultElement.innerText = "Please select a date!";
        return;
    }

    const birthDate = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if current month is before birth month
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += (months < 0) ? 12 : 0;
    }

    // Adjust if current day is before birth day
    if (days < 0) {
        // Get the last day of the previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }

    resultElement.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}