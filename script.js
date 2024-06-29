document.getElementById('calculate').addEventListener('click', function() {
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const ageOnThisDate = document.getElementById('ageOnThisDate').value;

    if (!dateOfBirth || !ageOnThisDate) {
        alert("Please select both dates.");
        return;
    }

    const birthDate = new Date(dateOfBirth);
    const targetDate = new Date(ageOnThisDate);

    if (birthDate > targetDate) {
        alert("Date of Birth cannot be later than Age On This Date.");
        return;
    }

    const diffTime = Math.abs(targetDate - birthDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = targetDate.getFullYear() - birthDate.getFullYear();
    const months = targetDate.getMonth() - birthDate.getMonth();
    const days = targetDate.getDate() - birthDate.getDate();

    let totalMonths = months;
    let totalYears = years;
    let totalDays = days;

    if (days < 0) {
        if(totalMonths!= 0){
            totalMonths -= 1;
        }
        totalDays += new Date(targetDate.getFullYear(), targetDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        totalYears -= 1;
        totalMonths += 12;
    }

    document.getElementById('years').innerText = totalYears;
    document.getElementById('months').innerText = totalMonths;
    document.getElementById('days').innerText = totalDays;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('dateOfBirth').value = '';
    document.getElementById('ageOnThisDate').value = '';
    document.getElementById('years').innerText = '';
    document.getElementById('months').innerText = '';
    document.getElementById('days').innerText = '';
});
