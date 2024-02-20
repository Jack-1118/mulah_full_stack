document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('checkPoints').addEventListener('click', function() {
        var countryCode = document.getElementById('country-code').value;
        var mobileNumber = document.getElementById('mobile-number').value;
        
        // Validate the input
        if (countryCode + mobileNumber === "+60173527250") {
            // Redirect to the second page
            window.location.href = 'page2.html'; // Replace with the actual URL of your second page
        } else {
            // Alert the user if the input is not the valid number
            alert('No such number found! Please try again.');
        }
    });
});

