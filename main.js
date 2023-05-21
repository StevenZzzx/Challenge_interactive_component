let numberContainer = document.querySelector('.ratings-container');
let ratingNumber = document.querySelector('.thankyou-state_result--number');
let submitButton = document.querySelector('.btnSubmit-container_btn')
let targetContainer = document.querySelector('.target-container')
let thankyouState = document.querySelector('.thankyou-state')
var numbersRates = ['1','2','3','4','5']

numberContainer.addEventListener('click',event=>{
    let numberSelected = event.target.innerText;
    ratingNumber.innerText = numberSelected;

    if (numbersRates.includes(numberSelected)){
        submitButton.addEventListener('click',()=>{
            targetContainer.style.display = 'none';
            thankyouState.style.display = 'flex';
            
        })
    }
})

