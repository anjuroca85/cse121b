/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
};
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = parseFloat(document.getElementById('add2').value);
    //let sum = add(addNumber1, addNumber2);
    //document.getElementById('sum').value = sum;
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
};
// Add a "click" event listener to the HTML button with ID 'addNumbers'
document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
};
const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = parseFloat(document.getElementById('subtract2').value);
    // Calculate the difference using the subtract function
    //let sum = add(addNumber1, addNumber2);
    // Update the value of the HTML element with ID 'difference'
    //document.getElementById('sum').value = sum;
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};
// Add a "click" event listener to the HTML button with ID 'subtractNumbers'
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = parseFloat(document.getElementById('factor2').value);

  // Calculate the product using the multiply arrow function
  let product = multiply(factor1, factor2);

  // Update the value of the HTML element with ID 'product'
  document.getElementById('product').value = product;
};

// Add a "click" event listener to the HTML button with ID 'multiplyNumbers'
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;

}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

// I started with passing a function as an argument in the below defined parameter.
//So I first set the event listener to get a total buttom 
document.getElementById('getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable to store the numeric value from the subtotal field
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    
    // The following was optional, but I noticed I could not test it because I only could enter 
    //numbers in the boxes

    if (isNaN(subtotal)) {
        alert('Please enter valid numbers');
        return; // Exit the function if input is not valid
      }
  
    // Checking if the membership checkbox has been checked
    let isMember = document.getElementById('member').checked;
  
    // Applying a 20% discount if the user is a member with an if statement
    if (isMember) {
      subtotal *= 0.8; // 20% discount
    }
  
    // Output the total to the total span in the specified format
    let totalRange = document.getElementById('total');
    totalRange.textContent = `$ ${subtotal.toFixed(2)}`;
    // The virtual gathering explained the above two lines as:
    // document.getElementById('total').textContent = `$ ${subtotal.toFixed(2)}`;
    //so I had been documenting different forms to code for my own reference.
  });
  

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
document.getElementById('array').textContent = arrayNum

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = arrayNum.filter(number => number % 2 !==0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = arrayNum.filter(number => number % 2 ===0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = arrayNum.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = arrayNum.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = arrayNum.map(number => number * 2).reduce((sum, number) => sum + number);