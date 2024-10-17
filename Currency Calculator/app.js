// ELementler seç
const amountInput=document.querySelector("#amount");
const firstselect=document.querySelector("#firstoption");
const secondselect=document.querySelector("#secondoption");
const resultbutton=document.querySelector("#result");
const cevirButton = document.querySelector("#converter");


const currency = new Currency ();


runEventListeners();
function runEventListeners(){
    cevirButton.addEventListener("click",exchange);
}
function exchange(){
    const amount = Number(amountInput.value.trim());
    const firstSelectValue = firstselect.options[firstselect.selectedIndex].textContent;
    const secondSelectValue = secondselect.options[secondselect.selectedIndex].textContent;

    
    currency.exchange(amount,firstSelectValue,secondSelectValue)
    .then((result) =>{
        resultbutton.value=result.toFixed(3)
    } )


}






