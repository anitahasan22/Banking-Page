function getInputValue(inputID){
    const depositInput=document.getElementById(inputID);
    const newDepositAmountText= depositInput.value;
    const newDepositAmount=parseFloat(newDepositAmountText);
    //clear deposit input field
depositInput.value='';
    return newDepositAmount;

}
//function
function updateTotalField(totalFieldID,newDepositAmount){
    //debugger;
    const depositTotal=document.getElementById(totalFieldID);
    const previousDepositText= depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositText);

    const newDepositTotal=parseFloat(previousDepositAmount+newDepositAmount);
    
    depositTotal.innerText= newDepositTotal;

}

function updateBalance(newDepositAmount,isAdd){
    const balanceTotal= document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(balanceTotalText);

  //onst newBalanceTotal=previousBalanceTotal+newDepositAmount;
    
    if(isAdd==true){
        const newBalanceTotal=previousBalanceTotal+newDepositAmount;
        balanceTotal.innerText=newBalanceTotal;
    }
    else{
        const newBalanceTotal=previousBalanceTotal-newDepositAmount;
        balanceTotal.innerText=newBalanceTotal;
    }
}

//deposit
document.getElementById("deposit-button").addEventListener('click',function(){
    //const depositInput=document.getElementById('deposit-input');
    //const newDepositAmountText= depositInput.value;
    //const newDepositAmount=parseFloat(newDepositAmountText);
    //console.log(depositAmount);
    const newDepositAmount= getInputValue('deposit-input');

    //const depositTotal=document.getElementById('deposit-total');
    //const previousDepositText= depositTotal.innerText;
    //const previousDepositAmount=parseFloat(previousDepositText);

    //const newDepositTotal=parseFloat(previousDepositAmount+newDepositAmount);
    
    //depositTotal.innerText= newDepositTotal;
    if(newDepositAmount>0){
        updateTotalField('deposit-total',newDepositAmount);
        updateBalance(newDepositAmount,true);
    }
      
    //updat balance
   // const balanceTotal= document.getElementById('balance-total');
    //const balanceTotalText=balanceTotal.innerText;
    //const previousBalanceTotal= parseFloat(balanceTotalText);

    //const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    //balanceTotal.innerText=newBalanceTotal;

})

    //withdraw
    document.getElementById("withdraw-button").addEventListener('click',function(){
        //const withdrawInput=document.getElementById('withdraw-input');
        //const withdrawAmountText=withdrawInput.value;
        //console.log(withdrawAmountText);
        //const newWithdrawAmount= parseFloat(withdrawAmountText);
        //console.log(newWithdrawAmount);
        const newWithdrawAmount= getInputValue('withdraw-input');

        //set
       // const withdrawTotal= document.getElementById('withdraw-total');
        //const previousWithdrawText=withdrawTotal.innerText;
       // const previousWithdrawTotal= parseFloat(previousWithdrawText);
       // const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
       // withdrawTotal.innerText=newWithdrawTotal;
       if(newWithdrawAmount>0){
        updateTotalField('withdraw-total',newWithdrawAmount);
        updateBalance(newWithdrawAmount,false);
       }
      
        //update balance
        //const balanceTotal= document.getElementById('balance-total');
        //const previousBalanceText=balanceTotal.innerText;
        //const previousBalanceTotal=parseFloat(previousBalanceText);
        //const newBalanceTotal= previousBalanceTotal-newWithdrawAmount;
       // balanceTotal.innerText=newBalanceTotal;
      

        
        
    })