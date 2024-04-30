document.addEventListener("DOMContentLoaded", function() {
    const numberInputs = document.querySelectorAll(".number-input input[type='number']");
    
    numberInputs.forEach(input => {
        const minusBtn = input.parentNode.querySelector(".minus-btn");
        const plusBtn = input.parentNode.querySelector(".plus-btn");
        
        minusBtn.addEventListener("click", function() {
            if (input.value > input.min) {
                input.value = parseInt(input.value) - 1;
            }
        });
        
        plusBtn.addEventListener("click", function() {
            if (input.value < input.max || !input.max) { // Added condition to handle missing 'max' attribute
                input.value = parseInt(input.value) + 1;
            }
        });
    });

     // Predict and analyze button functionality
     const form = document.getElementById("diabetes-form");

     form.addEventListener("submit", function(event) {
         event.preventDefault();
 
         const inputValues = {};
         const inputs = document.querySelectorAll(".number-input input[type='number']");
         inputs.forEach(input => {
             inputValues[input.id] = input.value;
         });
 
    });
});