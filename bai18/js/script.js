const calculator={
    display:'0',
    firstNumber:null,
    waitingforsecondoperand:false,
    operator:null,
}
function updateDisplay(){
    const display=document.querySelector('.calculator-screen');
    display.value=calculator.display;
}
function updateDigit(digit){
    const waitingforsecondoperand= calculator.waitingforsecondoperand;
    const display=calculator.display;
    if( waitingforsecondoperand===true){
        calculator.display=digit;
        calculator.waitingforsecondoperand=false;
    }else{
        if(display==='0'){
            calculator.display=digit;
        }else{
            calculator.display+=digit;
        }
    }
    
    console.log(calculator);
}
function inputDecimal(decimal){
    if(calculator.waitingforsecondoperand===true){return;}
    if(!calculator.display.includes(decimal)){
        calculator.display+=decimal;
    }
   
}
function handleOperator(nextOperator){
    const operator= calculator.operator;
    const display= calculator.display;
    const firstNumber= calculator.firstNumber;
    const inputValue=parseFloat(display);
    if(operator==='!'){
       calculator.firstNumber=factorial(firstNumber);
       calculator.display=String(calculator.firstNumber);
    }
    if(operator==='%'){
        calculator.firstNumber=firstNumber/100;
    }
    if(operator==='square'){
        calculator.firstNumber=firstNumber*firstNumber;
        calculator.display=String(calculator.firstNumber);
    }
    if(operator==='cubed'){
        calculator.firstNumber=firstNumber*firstNumber*firstNumber;
        calculator.display=String(calculator.firstNumber);
    }
    if(operator==='square-root'){
        calculator.firstNumber=Math.sqrt(firstNumber);
        calculator.display=String(calculator.firstNumber);
    }

    if(operator && calculator.waitingforsecondoperand===true){
        calculator.operator=nextOperator;
        console.log(calculator);
        return;
    }
    if(firstNumber===null){
        calculator.firstNumber=inputValue;
    }else if(operator){
        const result = performCalculation[operator](firstNumber,inputValue);
        calculator.display=String(result);
        calculator.firstNumber=result;
    }
    calculator.waitingforsecondoperand=true;
    calculator.operator=nextOperator;
    console.log(calculator);
}
function factorial(n){
    if(n===1){
        return 1;
    }
        return n*factorial(n-1);
}
const performCalculation={
    '/': function(firstNumber,secondNumber){
        return firstNumber/ secondNumber;
    },
    'x': function(firstNumber,secondNumber){
        return firstNumber* secondNumber;
    },
    '+': function(firstNumber,secondNumber){
        return firstNumber+ secondNumber;
    },
    '-': function(firstNumber,secondNumber){
        return firstNumber- secondNumber;
    },
    '=': function(firstNumber,secondNumber){
        return secondNumber;
    },
    
};
function resetCalculator() {
    calculator.display = '0';
    calculator.firstNumber = null;
    calculator.waitingforsecondoperand = false;
    calculator.operator = null;
    console.log(calculator);
  }
updateDisplay();
const Calculator= document.querySelector('.calculator');
const keys=Calculator.querySelector('.calculator-keys');

keys.addEventListener('click',function(event){
    const target= event.target;
    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('decimal')){
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if(target.classList.contains('clear-all')){
        resetCalculator();
        updateDisplay();
        return;
    }
    if(target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    updateDigit(target.value);
    updateDisplay();
    console.log(target.value,'digit');
});