//this is comment
const defaultResault=0;
let currentResult = defaultResault;
let logEntries = [];

function getUserNumberInput (){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resaultBeforeCalc,CalcNumber){
    const calcDescription =` ${resaultBeforeCalc} ${operator} ${CalcNumber}`;
    outputResult(currentResult, calcDescription) ;//from vendor file

}
function  writeToLog(
    operationIdentifier,
    prevResult ,
    operationNumber,
    newResult
)
{
    const logEntry = {
    operation: operationIdentifier ,
    prevResult:prevResult ,
    number: operationNumber,
    result: newResult
    }
    logEntries.push(enteredNumber);
    console.log(logEntries);

}
function calculateResult (calculationType){
    const enteredNumber =  getUserNumberInput();
    if(
        calculationType !== 'ADD' &&
        calculationType!== 'SUBTRACT' &&
        calculationType!== 'MULTIPLY' &&
        calculationType!== 'DIVIDE' ||
        enteredNumber === 0  
    ){ 
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType=== 'ADD'){
        currentResult += enteredNumber   ;
        mathOperator = '+';
    } else if ( calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber   ;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber   ;
        mathOperator = '*';
    }else if( calculationType === 'DIVIDE'){
        currentResult /= enteredNumber   ;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator , initialResult , enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);  
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}


function multiply(){
   calculateResult('MULTIPLY');
}

function divide(){ 
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
  