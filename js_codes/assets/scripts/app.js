const defaultResault=0;
let currentResult = defaultResault;

function add(){
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '') ;
}

addBtn.addEventListener('click',add);




