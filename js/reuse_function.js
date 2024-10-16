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