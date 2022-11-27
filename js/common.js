// calculate-total  
function getTextElementValueById(elementId){
const TotalElement = document.getElementById(elementId);
const currentPhoneTotalString = TotalElement.innerText;
const currentPhoneTotal = parseInt(currentPhoneTotalString);
return currentPhoneTotal;
}

function setTextElementValueById(elementId,value){
    const subTotalElement  = document.getElementById(elementId)
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate-Total
  const oneCurrentPhoneTotal = getTextElementValueById('phone-input');
  const twoCurrentCaseTotal = getTextElementValueById('case-input');
  const currentSubTotal = oneCurrentPhoneTotal + twoCurrentCaseTotal;
  setTextElementValueById('sub-total',currentSubTotal);
  // tax-total
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById('tax-amount',taxAmount);
  // Final-total
  const finalAmount = taxAmount + currentSubTotal;
  setTextElementValueById('tax-amount',finalAmount);



}