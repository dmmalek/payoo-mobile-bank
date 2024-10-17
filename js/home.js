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
    //balance input Validation
    if (isNaN(addMoney) === true) {
        alert('Invalid input');
        return;
    }

    const mainBalance = homeGetTextField('avalaible-balance');
    const newBalance = mainBalance + addMoney;
    document.getElementById('avalaible-balance').innerText = newBalance;

    const div = document.createElement('div');
    div.classList.add('bg-green-400', 'p-4', 'rounded-md', 'mb-4');
    div.innerHTML = `
    <h4 class ="font-bold text-xl">Add Fund</>
    <p>${addMoney}BDT is adding Account.New Balance is ${newBalance} </p>
    `
    document.getElementById('transaction-child').appendChild(div);
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
    const div = document.createElement('div');
    div.classList.add('bg-green-400', 'p-4', 'rounded-md', 'mb-4');
    div.innerHTML = `
    <h4 class ="font-bold text-xl">Cash Out</>
    <p>${cashOutBalance}BDT is adding Account.New Balance is ${newBalance} </p>
    `
    document.getElementById('transaction-child').appendChild(div);

})
