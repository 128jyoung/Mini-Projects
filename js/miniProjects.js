//TIP CALCULATOR PROJECT
let tipAmount;
let subTotal=67.72;
let percentage=0.2;
let totalBill;

tipAmount=subTotal*percentage;
console.log("Tip amount: " + tipAmount.toFixed(2));

totalBill=subTotal + tipAmount;
console.log("Total amount due: " + totalBill.toFixed(2));

//PAYCHECK CALCULATOR

let hoursWorked=167.5;
let hourlyRate=4.25
let grossPay=hoursWorked*hourlyRate;
console.log("Gross Pay: " + grossPay.toFixed(2))