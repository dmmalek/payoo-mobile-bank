// show cashout form and hindden add money form 

document.getElementById('cash-fund').addEventListener("click", () => {
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

})

// show add Fund form and hindden cash out form 

document.getElementById('add-fund').addEventListener("click", () => {
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');

})