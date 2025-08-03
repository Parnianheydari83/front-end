/////////////////////////// NUMBERS ///////////////////////////
const zeroButton = document.getElementById('zero_button')
const oneButton = document.getElementById('one_button');
const twoButton = document.getElementById('two_button');
const threeButton = document.getElementById('three_button');
const fourButton = document.getElementById('four_button');
const fiveButton = document.getElementById('five_button');
const sixButton = document.getElementById('six_button');
const sevenButton = document.getElementById('seven_button');
const eightButton = document.getElementById('eight_button');
const nineButton = document.getElementById('nine_button');

/////////////////////////// OPERATORS ///////////////////////////
const equalButton = document.getElementById('equal_button');
const plusButton = document.getElementById('plus_button');
const minusButton = document.getElementById('minus_button');
const devideButton = document.getElementById('devide_button');
const multiplyButton = document.getElementById('multiply_button');
const dotButton = document.getElementById('dot_button')
const deleteButton = document.getElementById('delete_button');

const calculationResultElement = document.getElementById('calculation_result');
const calculationShowingElement = document.getElementById('calculation_show');
const numbersArray = ['1','2','3','4','5','6','7','8','9'];
const operatorsArray = ['+','-','*','/','.']



let currentCalculation= [];

function show_result(){
   calculationShowingElement.textContent =  currentCalculation.join('');
}

function addKeyToCalculation(key){
    if( (operatorsArray.includes(key) &&  operatorsArray.includes(currentCalculation[currentCalculation.length -1])
        || (operatorsArray.includes(key) && (currentCalculation.length) === 0 && key !== '-')
    )){
        return;
    }
    currentCalculation.push(key);
    show_result();
}
function deleteKeyFromCalculation(){
    if (currentCalculation.length){
        currentCalculation.pop();
        if (currentCalculation.length===0){
            calculationShowingElement.textContent = 'null'
            return
        }
        show_result();
    }else
        return
    
    
}
function calculation(){
    if(currentCalculation.length){
    let calculationString = currentCalculation.join('');
    let result = eval(calculationString);
    calculationResultElement.textContent = '= ' + result; 
    currentCalculation.splice(0);
    }

}



/////////////////////////// EVENTLISTENERS ///////////////////////////
zeroButton.addEventListener('click',()=>{
    addKeyToCalculation('0');
})

oneButton.addEventListener('click',()=>{
    addKeyToCalculation('1')
});

twoButton.addEventListener('click',()=>{
    addKeyToCalculation('2')

});

threeButton.addEventListener('click',()=>{
    addKeyToCalculation('3')
})

fourButton.addEventListener('click', ()=>{
    addKeyToCalculation('4');
})

fiveButton.addEventListener('click',()=>{
    addKeyToCalculation('5')
})

sixButton.addEventListener('click',()=>{
    addKeyToCalculation('6')
})

sevenButton.addEventListener('click' , ()=>{
    addKeyToCalculation('7');
})

eightButton.addEventListener('click',()=>{
    addKeyToCalculation('8')
})

nineButton.addEventListener('click',()=>{
    addKeyToCalculation('9')
})

plusButton.addEventListener('click',()=>{
    addKeyToCalculation('+')

})

minusButton.addEventListener('click', ()=>{
    addKeyToCalculation('-');
})

devideButton.addEventListener('click',()=>{
    addKeyToCalculation('/')
})

multiplyButton.addEventListener('click',()=>{
    addKeyToCalculation('*')
})

dotButton.addEventListener('click',()=>{
    addKeyToCalculation('.');
})

deleteButton.addEventListener('click', ()=>{
    deleteKeyFromCalculation()
})

equalButton.addEventListener('click', calculation)