document.getElementById('login-btn').addEventListener("click", (event) => {
    event.preventDefault();
    const mobilNumber = getInputTextField('phone-number');
    const pinNumber = getInputTextField('pin-number');
    mobilNumber === '5' && pinNumber === '1234' ? window.location.href = '../home.html' : alert('log in failed');

})

//reuseable function gor log in page

function getInputTextField(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}