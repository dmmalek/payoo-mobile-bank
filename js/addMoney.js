document.getElementById('add-money-btn').addEventListener("click", (event) => {
    event.preventDefault();
    const avalaibleBalance = document.getElementById('avalaible-balance').innerText;
    const avBalance = parseFloat(avalaibleBalance);
    const addMoney = document.getElementById('add-balance').value;
    const addBalance = parseFloat(addMoney);
    const pinNumber = document.getElementById('pin-number').value;

    if (pinNumber === '1234') {
        const newBalance = avBalance + addBalance;
        document.getElementById('avalaible-balance').innerText = newBalance;
    }
    else {
        alert('process failed.please try again')
    }

})