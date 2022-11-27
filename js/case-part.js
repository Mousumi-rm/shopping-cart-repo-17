function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);  

let newCaseNumber;
if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
}
else{
    newCaseNumber = previousCaseNumber - 1;
}

caseNumberField.value = newCaseNumber;
return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const CaseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-input');
    caseTotalElement.innerText = CaseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber = updateCaseNumber(true);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})