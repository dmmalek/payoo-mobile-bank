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
//