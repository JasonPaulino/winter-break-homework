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
