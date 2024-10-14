                                             //CHAPTER 10

                                          /* Question 01 */
function sum(a, b) {
    return a + b;
}result= sum(8, 10);

console.log(result);

                                         /* Question 02 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}fahrenheit = celsiusToFahrenheit(35);

console.log(fahrenheit); 

                                        /* Question 03 */
function prime(num) {
    if (num <= 1) 
        return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) 
        return false; 
    }
    return true; 
}

console.log(prime(8));  
console.log(prime(10));                                         

                                      /* Question 04 */ 
function factorial(n) {
        if (n < 0) {
    return "Factorial is not defined for negative numbers.";
 } else if (n === 0 || n === 1) {
    return 1;
} else {
    var result = 1;
    for (var i = 2; i <= n; i++) {
    result *= i;
    }
    return result;
 }
}

console.log(factorial(5));

                                     /* Question 05 */
function greetUser() {
    console.log("Hello, welcome!");
}greetUser();                                     

                                     /* Question 06 */
function greetByName(name) {
    console.log(`Hello, ${name}!`);
}greetByName("Alina");   

                                     /* Question 07 */
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = sumOfTwoNumbers(5, 10);
console.log(result);        

                                     /* Question 08 */
function vote(age) {
    return age >= 18;
}

console.log(vote(20)); 
console.log(vote(17));                                     

                                        //CHAPTER 11

                                      /* Question 01 */    
const square = (num) => num * num;

console.log(square(5)); 
console.log(square(3));       

                                      /* Question 02 */
const filterEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = filterEvenNumbers(nums);
console.log(evenNumbers);                                       

                                      /* Question 03 */
const concatenateStrings = (str1, str2) => str1 + str2;
const text = concatenateStrings("Hello, ", "world!");

console.log(text);  
                   
                                      /* Question 04 */
const findMax = (numbers) => Math.max(...numbers);

const numbers = [3, 5, 7, 2, 8];
const maxNumber = findMax(numbers);

console.log(maxNumber); 
                                      
                                     /* Question  05 */
const sumOfNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const number = [1, 2, 3, 4, 5];
const totalSum = sumOfNumbers(number);

console.log(totalSum);             

                                     /* Question 06 */
const print = () => {
    console.log("Hello World");
};

print();  

                                     /* Question 07 */
const calculateSquare = (num) => num * num;

console.log(calculateSquare(4));  
console.log(calculateSquare(5));

                                     /* Question 08 */
const isPositive = (num) => num > 0;

console.log(isPositive(5));   
console.log(isPositive(-3));
console.log(isPositive(0)); 

                                    /* Question 09 */
const generateRandomNumber = () => Math.floor(Math.random() * 50) + 1;

console.log(generateRandomNumber());      

                                   /* Question 10 */
const convertMinutesToSeconds = (minutes) => minutes * 60;

console.log(convertMinutesToSeconds(5));  
console.log(convertMinutesToSeconds(10));                                   

                                      //CHAPTER 12

                                   /* Question 01 */
(function() {
    console.log("Hello");
})();  

                                  /* Question 02 */ 
const sum = function(num1, num2) {
    return num1 + num2;
};

const results = sum(5, 10);
console.log(results);    

                                  /* Question 03 */
const num = [5, 3, 8, 1, 2];

num.sort(function(a, b) {
    return a - b;
});

console.log(nums);                                  

                                 /* Question 04 */
(function(name) {
    console.log(`Hello, ${name}!`);
})("Maryam");

                                 /* Question 05 */
const checkEvenOrOdd = function(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
};

checkEvenOrOdd(5); 
checkEvenOrOdd(10);

                                 /* Question 06 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumber = arr.filter(function(num) {
    return num % 2 !== 0;
});

console.log(oddNumber);  

                                 /* Question 07 */
const factorial = function(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        var result = 1;
        for (var i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};

console.log(factorial(5));  
console.log(factorial(0));  
console.log(factorial(-3)); 

                                 /* Question 08 */
const no = [1, 2, 3, 4, 5];

const sum = no.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);                                  

                                  /* Question 09 */
(function(age) {
    if (age >= 18) {
        console.log(`Age ${age}: Eligible to vote.`);
    } else {
        console.log(`Age ${age}: Not eligible to vote.`);
    }
})(20);
