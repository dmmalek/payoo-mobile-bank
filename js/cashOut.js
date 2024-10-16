document.getElementById('cashout-money-btn').addEventListener("click", (e) => {
    e.preventDefault();
    const balance = document.getElementById('avalaible-balance').innerText;
    const haveBlalance = parseFloat(balance);
    const inputBalance = document.getElementById('input-balance-cashout').value;
    const cashOutBalance = parseFloat(inputBalance);
    const pinNumber = document.getElementById('pin-number-cashout').value;
    if (pinNumber === '1234') {
        const newBalance = haveBlalance - cashOutBalance;
        document.getElementById('avalaible-balance').innerText = newBalance;
    }
    else {
        alert('Transaction failed.balance add your account')
    }
})