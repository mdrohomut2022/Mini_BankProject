// handal deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log("deposit button");

    // get amount deposit
    const depositInput=document.getElementById('deposit-input');

    const newDepositAmountText=depositInput.value;
    const newDepositAmount=parseFloat(newDepositAmountText);

    // console.log(newDepositAmount);

// update deposit total
    const depositTotal=document.getElementById('deposit-total');

    const previousDepositAmountText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositAmountText);

    const newDepositTotal=previousDepositAmount +newDepositAmount;
    

     depositTotal.innerText=newDepositTotal;


     // update account balance

     const balanceTotal=document.getElementById('balance-total');
     const balanceTotalText=balanceTotal.innerText;
     const previousBalanceTotal=parseFloat(balanceTotalText);

     const newbalanceTotal=previousBalanceTotal+newDepositAmount;
     balanceTotal.innerText=newbalanceTotal;



     //clear deposit input 
     depositInput.value='';
})



document.getElementById('withdraw-button').addEventListener('click',function(){


    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const withdrawAmount=parseFloat(withdrawAmountText);


   
    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawTotalAmountText=withdrawTotal.innerText;
    const withdrawTotalAmount=parseFloat(withdrawTotalAmountText);

     withdrawTotal.innerText=withdrawAmount+withdrawTotalAmount;


     const balanceTotal=document.getElementById('balance-total');

    const balanceTotalAmountText=balanceTotal.innerText;
    const balanceTotalAmount=parseFloat(balanceTotalAmountText);

    balanceTotal.innerText=balanceTotalAmount-withdrawAmount;





    // console.log(balanceTotalAmount);

    //clear input field

    withdrawInput.value='';

})
