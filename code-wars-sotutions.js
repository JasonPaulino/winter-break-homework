// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

// 1
function solution(number) {
    let result = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return result;
}

/*  Created a variable called `result` that is initialized to the number 0. When we find a number that is divisible by 3 OR 5 AND is also below our input number, it will append that number to our `result` variable.

    Proceeded to create a for loop...
    
        -   Initialized a varaible called `i` with a value of 3 (`let i = 0;`). We start with the number 3 because we would like to check whether it is divisible by 3 OR 5, therefore, we don't care about starting at anything that is less than 3 since we know 3 is the first multiple of 3.
        
        -  Continued iterating until the condition `i < number` is false because we do not want to include the input in our actual solution. The question states to find these multiples of 3 OR 5 that are LESS THAN the input.
        
        -   Increment by 1 to check every value between 3 and the given number minus one (`i++`).
        
            -   Created an if block that will execute a statement based on two conditions...
            
                1). If the current number within our iteration is divisible by 3 with a remainder of 0, append this number to `result` (`i % 3 === 0`).
                2). If the current number within our iteration is divisible by 5 with a remainder of 0, append this number to `result` (`i % 5 === 0`).
                
                *IMPORTANT* The OR logical operator was used `||` to chain these two conditions together. Either of the conditions must be true for that statement to execute.
    
    Returned the variable that is holding the sum of all the numbers that are multiples of 3 and 5 below the passed-in number. (`return result;`).
*/


// 2
function likes(names) {
    switch (true) {
        case names.length === 0:
            return "no one likes this";
        case names.length === 1:
            return `${names[0]} likes this`;
        case names.length === 2:
            return `${names[0]} and ${names[1]} like this`;
        case names.length === 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            let firstName = names.shift();
            let secondName = names.shift();
            return `${firstName}, ${secondName} and ${names.length} others like this`;
    }
}

/*  Created a switch that will return a string based on its conditions...
    
        -   First case checks if the length of the `names` array is 0... If so, return the string "no one likes this".
        
        -   Second case checks if the length of the `names` array is 1... If so, return the string the interpolated string `${names[0]} likes this`;
        
        -   Third case checks if the length of the `names` array is 2... If so, return the string the interpolated string `${names[0]} and ${names[1]} like this`;
        
        -   Fourth case checks if the length of the `names` array is 3... If so, return the string the interpolated string `${names[0]}, ${names[1]} and ${names[2]} like this`;
        
        -   If none of these cases are true, then we have a default case...
        
            -   Initialized two variables: `firstName` to hold the first element of `names` indexed at 0 and `Lastname`. We will splice this off of the array which is why we are saving them to two variables.
            
            -   We know return the string `${firstName}, ${secondName} and ${names.length} others like this`; (names.length will give the total length of the array which does not include the two elements we spliced (removed) from our array).
*/

// 3
function findUniq(arr) {
    const freq = {};
    for (const num of arr) {
        if (freq[num]) {
            freq[num]++;
        }
        else {
            freq[num] = 1;
        }
    }
    for (const key in freq) {
        if (freq[key] === 1) {
            return Number(key);
        }
    }
}

/*  Created a hashmap called `freq` that is going to encapsulate key and value pairs; The keys will be each unique element that is within the array and the values will be how many occurrences of the element have we seen in the array (const freq = {};).

        -   Proceeded to create a for of loop...
        
            -   Initialized a variable called `num` that represents every element within our array `arr`
            
            -   Created an if block that checks if the current element `num` is a key that exists within our `freq` hashmap. If it does already, increment its value by 1.
            
            -   Created an else block that allows the `freq` hashmap to encapsulate the current element `num` as a key with an assigned value of 1 if our if block expression is false.
        
        -   Proceeded to create a for-in loop...
        
            -   Initialized a variable called `key` that represents every key within our `freq` hashmap
            
            -   Created an if block that checks if the current key's value `key` is exactly one (a single occurrence). If so, return that key.
            
            *IMPORTANT* By default, any key encapsulated within an object is set to the data type string, so we must convert the string back into a number when we return the non-duplicate (unique) number of the array (Number(key) or +key)
            
*/


// 4
function findOutlier(integers) {
    const even = [];
    const odd = [];
    for (const num of integers) {
        if (num % 2 === 0) {
            even.push(num);
        }
        else {
            odd.push(num);
        }
    }
    if (even.length === 1) {
        return even[0];
    }
    else {
        return odd[0];
    }
}

/*  Created two variables, `even` and `odd`, with a value of an empty array. All the numbers that are odd will go within our `odd` array and vice versa.

        -   Proceeded to create a for of loop...
        
            -   Initialized a varaible called `num` that represents every element within our array `integers`
            
            -   Created an if block that checks if the current element `num` is divisible by 2 with a remainder of 0. If so, it will push that element `num` into our `even` array.
            
            -   Created an else block that pushes the current element `num` to the array `odd` if the if expression is false
        
        -   Created an if block that checks if the the array `even` has a length of 1. If so, return the single element that is within the `even` array.
        
        -   Created an else block that returns the only element which is also the first element of the `odd` array
*/

// 5
function duplicateCount(text) {
    const freq = {};
    const lowerCaseText = text.toLowerCase();
    let result = 0;
    for (const char of lowerCaseText) {
        if (freq[char]) {
            freq[char]++;
        }
        else {
            freq[char] = 1;
        }
    }
    for (const key in freq) {
        if (freq[key] > 1) {
            result++;
        }
    }
    return result;
}

/*  Created three variables...

        1). `freq` that is going to encapsulate key and value pairs; The keys will be each unique element that is within the string and the values will be how many occurrences of the element have we seen in the string.
        
        2). `lowerCaseText` which will store a lowercased version of the function input string
        
        3). `result` by default will store a value of 0. Whenever we find a key in our hashmap that has a value greater than 1, we will increase the `result` value by 1

       -   Proceeded to create a for of loop...
        
            -   Initialized a variable called `char` that represents every element within our string `lowerCaseText`
            
            -   Created an if block that checks if the current element `char` is a key that exists within our `freq` hashmap. If it does already, increment its value by 1.
            
            -   Created an else block that allows the `freq` hashmap to encapsulate the current element `char` as a key with an assigned value of 1 if our if block expression is false.
        
        -   Proceeded to create a for-in loop...
        
            -   Initialized a variable called `key` that represents every key within our `freq` hashmap
            
            -   Created an if block that checks if the current key's value `key` is greater than one, increment the value of `result` by 1
            
        - Return the value of the `result` variable
*/

// 6 
function moveZeros(arr) {
    const nonZeros = arr.filter(ele => ele !== 0);
    while (nonZeros.length < arr.length) {
        nonZeros.push(0);
    }
    return nonZeros;
}

/*  Created a variable called `nonZeros` that holds the input array with zeros filtered out.

    Proceeded to create a while loop...
    
        - As long as the length of the  `nonZeros` is less than the length of the input array, execute its block which is pushing the number zero into the `nonZeros` array at the end of the list. Once the lengthg of `nonZeros` and input array are equal to each other, the loop will stop
        
    - Return the array `nonZeros` with the zeros now at the end of the array
*/

// 7
function pigIt(str) {
    const strArr = str.split(" ");
    let result = "";
    for (let char of strArr) {
        if (/[a-z]/gi.test(char)) {
            let firstLetter = char.slice(0, 1);
            char = char.slice(1);
            result += `${char}${firstLetter}ay `;
        }
        else {
            result += `${char} `;
        }
    }
    return result.trim();
}
