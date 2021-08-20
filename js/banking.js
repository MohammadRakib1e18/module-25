document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositValue = parseFloat(depositInput.value);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValue=parseFloat(depositTotal.innerText);


    depositTotal.innerText = depositTotalValue+depositValue;
    depositInput.value='';

    // update total balance
    updateBalance(depositValue, 0);
})

// work with withdraw system
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue = parseFloat(withdrawTotal.innerText);

    withdrawTotal.innerText = withdrawTotalValue+withdrawValue;
    withdrawInput.value = '';

    // update total balance
    updateBalance(0, withdrawValue);

})

function updateBalance(add, subtract){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = parseFloat(balanceTotal.innerText);

    const amountToAdd = (add-subtract);
    balanceTotal.innerText =  balanceTotalValue + amountToAdd;
}