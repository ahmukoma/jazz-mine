let loanAmmount = 10000;
let termYears = 5;
let APR = 3.99;

let amountUI = document.querySelector("#loan-amount");
let termUI = document.querySelector("#loan-years");
let aprUI = document.querySelector("#loan-rate");

let loanObj = {
    amount: 0,
    years: 0,
    rate: 0
}

let monthlyUI = document.querySelector("#monthly-payment");

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
    amountUI.value = loanAmmount;
    termUI.value = termYears;
    aprUI.value = APR;
    
    loanObj.amount = loanAmmount;
    loanObj.years = termYears;
    loanObj.rate = APR;
    
    calculateMonthlyPayment(loanObj);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    loanObj.amount = amountUI.value;
    loanObj.years = termUI.value;
    loanObj.rate = aprUI.value;
    
    updateMonthly(calculateMonthlyPayment(loanObj));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const principal = values.amount;
    let periodicRate = values.rate / 12;
    let numbOfPayments = values.years * 12;
    let numerator = principal * periodicRate / 100;
    
    let monthly = numerator / (1 - (1 + periodicRate/100)**(-numbOfPayments));
    
    return monthly.toFixed(2).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    monthlyUI.innerText = `$${monthly}`;
}
