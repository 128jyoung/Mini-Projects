let tipOutput=document.getElementById('tipAmountOutput');
let TotalOutput=document.getElementById('totalBillOutput');
let checkOutput=document.getElementById('paycheckAmountOutput');
let gradeOutput=document.getElementById('percentGradeOutput');
let gasOutput=document.getElementById('gasCostOutput');


let tipBtn=document.getElementById("tipButton");
tipBtn.addEventListener('click', function(){
    //Tip Calculator Varables
    let subTotal=document.getElementById('subTotalInput').valueAsNumber;
    let percentage=document.getElementById('percentageInput').valueAsNumber;
    let tipAmount;
    let totalBill;

    //Do the math
    tipAmount=subTotal*percentage;
    totalBill=subTotal+tipAmount;

    //Only show 2 decimal places
    tipAmount=tipAmount.toFixed(2);
    totalBill=totalBill.toFixed(2);

    //Show the output
    tipOutput.innerHTML="$"+tipAmount;
    TotalOutput.innerHTML="$"+totalBill;
})

let paycheckBtn=document.getElementById("paycheckButton");
paycheckBtn.addEventListener('click',function (){
    //Paycheck Calculator Variables
    let hoursWorked=document.getElementById('hoursWorkedInput').valueAsNumber
    let hourlyRate=document.getElementById('hourlyRateInput').valueAsNumber
    let paycheckAmount;

    //Do the math
    paycheckAmount=hoursWorked*hourlyRate;

    //Only show 2 decimal places
    paycheckAmount=paycheckAmount.toFixed(2);

    //Show the output
    checkOutput.innerHTML="$"+paycheckAmount;

})

let percentGradeBtn=document.getElementById("gradeButton")
percentGradeBtn.addEventListener('click',function (){
    //Percent Grade Calculator Variables
    let pointsEarned=document.getElementById('pointsEarnedInput').valueAsNumber;
    let totalPoints=document.getElementById('totalPointsInput').valueAsNumber;
    let percentGrade;

    //Do the math
    percentGrade=(pointsEarned/totalPoints)*100;

    //Only show 2 decimal places
    percentGrade=percentGrade.toFixed(2);


    //Show the output
    gradeOutput.innerHTML=percentGrade+"%"
})