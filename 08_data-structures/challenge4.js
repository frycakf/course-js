// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


const convertString = function() {
  const text = document.querySelector('textarea').value;
  
  const variablesArr = text.split('\n');
  const newVariablesArr = [];
  let longestWordLength = 0;

  // for every variable
  for (const variable of variablesArr) {
    const wordArr = variable.toLowerCase().trim().split('_');
    const newVariableArr = [];

    // for every word from variable
    for (let i = 0; i < wordArr.length; i++) {
      if (i === 0) {
        newVariableArr.push(wordArr[i]);
      } else {
        newVariableArr.push(capitalizeWord(wordArr[i]));
      }
    }

    // spojenim vytvor novou promennou
    const newVariableStr = newVariableArr.join('');
    newVariablesArr.push(newVariableStr);

    // zjisti delku nejdelsiho slova
    if (newVariableStr.length > longestWordLength) {
      longestWordLength = newVariableStr.length;
    }
  }

  // vytvor slozeny string pro kazdou promennou
  for (const [index, value] of newVariablesArr.entries()) {
    varString = value.padEnd(longestWordLength + 4, ' ').concat('✅'.repeat(index + 1));
    console.log(varString);
  }
}

const capitalizeWord = function(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

document.querySelector('button').addEventListener('click', convertString);