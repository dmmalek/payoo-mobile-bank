//Toggle Button funtionality

document.getElementById('cash-fund').addEventListener("click", () => {
    toggleFunction('cash-out-form');
})

document.getElementById('add-fund').addEventListener("click", () => {
    toggleFunction('add-money-form');
})

document.getElementById('transaction').addEventListener("click", () => {
    toggleFunction('transaction-form')
})
//Calculation for Add Fund

document.getElementById('add-money-btn').addEventListener("click", (event) => {
    event.preventDefault();
    const pinNumber = homeGetInputTextField('pin-number');
    validation(pinNumber);    //Pin input Validation
    const addMoney = homeGetInputTextField('add-balance');
    const mainBalance = homeGetTextField('avalaible-balance');

    balanceValidation(addMoney, mainBalance);  //balance input Validation

    const newBalance = mainBalance + addMoney;
    document.getElementById('avalaible-balance').innerText = newBalance;
})

//Calculation for Cash Out
document.getElementById('cashout-money-btn').addEventListener("click", (event) => {
    event.preventDefault();
    const pinNumber = homeGetInputTextField('pin-number-cashout');
    validation(pinNumber);  //Pin input Validation

    const cashOutBalance = homeGetInputTextField('input-balance-cashout');
    const mainBalance = homeGetTextField('avalaible-balance');

    balanceValidation(cashOutBalance, mainBalance);  //balance input Validation

    const newBalance = mainBalance - cashOutBalance;
    document.getElementById('avalaible-balance').innerText = newBalance;

})
