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
console.log("Gross Pay: " + grossPay.toFixed(2));

//GRADE CALCULATOR

let pointsEarned=19;
let totalPoints=20;
let grade=pointsEarned/totalPoints;
let percentageGrade=grade*100;
console.log("Grade: " + percentageGrade+"%");

//GAS COST CALCULATOR

let totalDistance=300;
let fuelEfficiency=29;
let gasPrice=4.31;
let gallonsUsed=totalDistance/fuelEfficiency;
let totalCost=gallonsUsed*gasPrice;
console.log("Gas Cost: " + totalCost.toFixed(2));