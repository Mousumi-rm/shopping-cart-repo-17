function updatePhoneNumber(isIncrease){
  const caseNumberField = document.getElementById('phone-number-field');
  const caseNumberFieldString = caseNumberField.value;
  const previousNumber = parseInt(caseNumberFieldString);

let newPhoneNumber;
if(isIncrease === true){
 newPhoneNumber = previousNumber + 1 ;
}
else{
  newPhoneNumber  = previousNumber - 1 ;
}
caseNumberField.value = newPhoneNumber;
 return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
  const inputMultiply = newPhoneNumber * 1250;
  const newPhoneTotal = document.getElementById('phone-input');
  newPhoneTotal.innerText = inputMultiply;
}

document.getElementById('btn-phone-pulse').addEventListener('click',function(){
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
   calculateSubTotal();
   
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
       const newPhoneNumber = updatePhoneNumber(false);
       updatePhoneTotalPrice(newPhoneNumber);
       calculateSubTotal();
       
})