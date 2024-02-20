document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name'); 
    const day = params.get('day');
    const month = params.get('month');
    const year = params.get('year');
    const email = params.get('email');

    // Display the data
    document.getElementById('name-display').textContent = name;
    document.getElementById('birthday-display').textContent = `${day}/${month}/${year}`;
    document.getElementById('email-display').textContent = email;
});
