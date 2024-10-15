document.getElementById('login-btn').addEventListener("click", (event) => {
    event.preventDefault();

})

document.getElementById('phone-number').addEventListener("keyup", (e) => {
    let phoneNumber = e.target.value;
    console.log(phoneNumber);
})