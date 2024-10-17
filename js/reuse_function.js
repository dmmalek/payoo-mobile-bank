//reuseable function gor log in page

function getInputTextField(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

//toggle function

function toggleFunction(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

    //which id will be shown
    const toggleId = document.getElementById(id).classList.remove('hidden');
    return toggleId;
}

//function for add-find and cash out

function homeGetInputTextField(id) {
    const inputValue = document.getElementById(id).value;
    const valueParse = parseInt(inputValue);
    return valueParse;
}

function homeGetTextField(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueParse = parseFloat(textValue)
    return textValueParse;
}

//Validation Function 

function validation(id) {
    if (id !== 1234) {
        return alert('pin invalid');
    }
}

function balanceValidation(balance, mainBalance) {
    if ((balance > mainBalance) || isNaN(balance) === true) {
        alert('Invalid Input');
        throw new Error;
    }
}