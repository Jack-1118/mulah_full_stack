document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('checkPoints').addEventListener('click', function() {
        var countryCode = document.getElementById('country-code').value;
        var mobileNumber = document.getElementById('mobile-number').value;
        
        
        if (countryCode + mobileNumber === "+60173527250") {
            
            window.location.href = 'page2.html?phone=' + countryCode + mobileNumber;
        } else {
            
            alert('No such number found! Please try again.');
        }
    });
});

