const defaultResult = 0;

let currentResult = defaultResult;

let logEnterNumber = [];

// input str value to number 
function getUserInputValue() {
  return parseInt(userInput.value);
}

// create output calc
function createCalc(calcOperator, resultBeforeCalc, calcNumber) {
  const description = `${resultBeforeCalc} ${calcOperator} ${calcNumber}`;
  outputResult(currentResult, description);
}

// log Object
function logObjectFunction(
  calcName,
  prevResult,
  enterInput,
  finalResult) {
  const logObject = {
    calculation: calcName,
    beginningNumber: prevResult,
    enteredNumber: enterInput,
    result: finalResult
  };
  logEnterNumber.push(logObject);
  console.log(logEnterNumber);
}

// function with if /*ADD*/ 
/* function calcResult(calcType) {
  const enterUserInput = getUserInputValue();
  // CHECKING IF NOT EQUAL AND 0
  if (calcType !== 'ADD' &&
    calcType !== 'SUBTRACT' &&
    calcType !== 'MULTIPLY' &&
    calcType !== 'DIVIDE' ||
    enterUserInput === 0
  ) {
    return;
  }

  const firstResult = currentResult;
  let mathOperator;
  // CASES WHERE HOW EXECUTED CODE
  if (calcType === 'ADD') {
    currentResult += enterUserInput;
    mathOperator = '+';
  } else if (calcType === 'SUBTRACT') {
    currentResult -= enterUserInput;
    mathOperator = '-';
  } else if (calcType === 'MULTIPLY') {
    currentResult *= enterUserInput;
    mathOperator = '*';
  } else if (calcType === 'DIVIDE') {
    currentResult /= enterUserInput;
    mathOperator = '/';
  }

  createCalc(mathOperator, firstResult, enterUserInput);
  logObjectFunction(calcType, firstResult, enterUserInput, currentResult);
}
*/

function calculate(calcultateType) {
  const enterUserInput = getUserInputValue();
  const firstResult = currentResult;
  let mathOperator;

  
  /* IT DOESN'T WORK ISNOT A NUMBER 
  function validateValue(checkIsNaN) {
    const changeToNum = parseInt(checkIsNaN);
    return isNaN(changeToNum ? alert('You enter invalid value (number) therefore it stopped') : changeToNum);
  }
*/

  switch (calcultateType) {
    case 'ADD':
      currentResult += enterUserInput;
      mathOperator = '+';
      break;
    case 'SUBTRACT':
      currentResult -= enterUserInput;
      mathOperator = '-';
      break;
    case 'MULTIPLY':
      currentResult *= enterUserInput;
      mathOperator = '*';
      break;
    case 'DIVIDE':
      currentResult /= enterUserInput;
      mathOperator = '/';
      break;
    default:
      // I DON'T KNOW WHY DEFAULT CASE IS NOT REACHED (NaN)
      alert('You enter invalid value therefore calculation stopped!!!');
      return;
  }

  createCalc(mathOperator, firstResult, enterUserInput);
  logObjectFunction(calcultateType, firstResult, enterUserInput, currentResult);
}

/* I SWITCH OFF THE CODE BECAUSE OF NEW APPROACH
// calc with '+'
function addcalc() {
  calcResult('ADD');
}

// calc with "-"
function subtract() {
  calcResult('SUBTRACT');
}

// calc with '*'
function multiply() {
  calcResult('MULTIPLY');
}

// calc with '/'
function divide() {
  calcResult('DIVIDE');
}
*/

// add calc buttons
addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
