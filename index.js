let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(`Testing:`, ages);

console.log(`1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.`)

// tried using an arrow function to perform the subtraction but wasnt getting the expected results, need to check my work/syntax
// const agesSubtract = () => {ages[ages.length-1] - ages[0]};
// console.log(agesSubtract);


// verifying length of array to see the change
console.log(ages.length);
let agesMinus = ages[ages.length-1] - ages[0];
console.log(agesMinus);
    
// ------------------------------------------------------------    


console.log(`1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)`)

// verifying length of array to see the change
ages.push(33);
console.log(ages.length);
console.log(agesMinus);

// ------------------------------------------------------------

console.log(`1c. Use a loop to iterate through the array and calculate the average age.`)

let sum = 0;

for (let age of ages) {
    sum += age;
}
averageAge = sum / ages.length;
console.log (averageAge);

// ------------------------------------------------------------

console.log(`2a.Use a loop to iterate through the array and calculate the average number of letters per name.`)
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let totalChar = 0

for (let name of names){
    totalChar += name.length;
}
console.log(totalChar);

averageLetters = totalChar/names.length;
console.log(averageLetters);

// ------------------------------------------------------------

console.log(`2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces`)
let joinedNames = ''

for (let person of names){
    joinedNames += person + ' ';
}

console.log(joinedNames);

// ------------------------------------------------------------

console.log(`3. How do you access the last element of any array?`)

console.log(`console.log(array[array.length-1])`);

// ------------------------------------------------------------

console.log(`4. How do you access the first element of any array?`)

console.log(`console.log(array[0])`);

// ------------------------------------------------------------

console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)

let nameLengths = []

for (let name of names){
    nameCount = name.length;
    nameLengths.push(nameCount);
}

console.log(nameLengths);

// ------------------------------------------------------------

console.log(`6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)
let sumOfChar = 0;

for(let count of nameLengths) {
    sumOfChar += count;
}

console.log(sumOfChar);

// ------------------------------------------------------------

console.log(`7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')`)

function concatenatedWords(word,n){
    console.log(word.repeat(n));
    }

concatenatedWords(`Wow`,6);

// ------------------------------------------------------------

console.log(`8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space`)

const nameBuilder = (firstName,lastName) => `${firstName} ${lastName}`

console.log (nameBuilder(`John`,`Bon Jovi`));

// ------------------------------------------------------------

console.log(`9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)

let numberArray = []
numberArray.push(3,44,5,61,12,45,200)
console.log(numberArray);

function arraySum(){
    let totalSum = 0
    for (let number of numberArray ){
        totalSum += number;
    }
    if(totalSum > 100){
        return true;
    } else {
        return false;
    }
}

console.log(arraySum());

// ------------------------------------------------------------

console.log(`10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

function numbersAverage(array){
    let averageTotal = 0;
    
    for (let num of array){
        averageTotal += num;
    }
    console.log(averageTotal/array.length)
}

numbersAverage(numberArray);
numbersAverage(ages);
numbersAverage(nameLengths);


// ------------------------------------------------------------



console.log(`11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
`)

let array1 = [1,3,5,7]
let array2 = [2,4,6,8]

function compareArrays(){
    let sum1 = 0;
    let sum2 = 0;
    
    for (let number of array1) {
        sum1 += number;
    }
    let averageSum1 = sum1 / array1.length;
    
    for (let unit of array2) {
        sum2 += unit;
    }
    let averageSum2 = sum2 / array2.length;
    
    if (averageSum1 > averageSum2){
        return true;
    }  else {
        return false;
    }
}
console.log(compareArrays());




// ------------------------------------------------------------

console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
`)
function willBuyDrink(isHotOutside,moneyInPocket){
    if (isHotOutside === true && moneyInPocket >= 10.50){
        return true;
    } else {
        return false;
    }

}

console.log(willBuyDrink(true,10.50))
console.log(willBuyDrink(false,11))
console.log(willBuyDrink(true,9))
console.log(willBuyDrink(false,5))