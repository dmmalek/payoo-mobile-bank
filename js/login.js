document.getElementById('login-btn').addEventListener("click", (event) => {
    event.preventDefault();
    let phoneNumber = document.getElementById('phone-number').value;
    let pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    if (phoneNumber === '5' && pinNumber === '1234') {
        window.location.href = '/home.html';
    }
    else {
        alert('Wrong Input');
    }

})
