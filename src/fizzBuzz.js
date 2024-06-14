/* # Task

Write a function, `generateFizzBuzz` which takes a number N and returns an array containing the numbers from 1 to N, with the following exceptions:
Certain values should be replaced, when any of the following conditions are met:

- If the value is a multiple of 3: use the value "Fizz" instead
- If the value is a multiple of 5: use the value "Buzz" instead
- If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

```
generateFizzBuzz(3) -->  [1, 2, "Fizz"]
```

If possible, try to identify a where a smaller helper function could be used, to practice breaking the solution into parts. */


/**
 * Write a function that counts from 1 to N. Where there is a mutiple of 3 write "Fizz", multiple of 5 write "Buzz", multiple sof 3 & 5 write "FizzBuzz".
 * @Param {number} - input number
 * @Return {array} - output array
 */

    function generateFizzBuzz(N){
        for (let i = 1; i < N; i++){
            if 
        }
    }

    function isMultipleOf3(){
        if (i % 3 === 0){
            outputArr.push("Fizz")
        }
    }

    function isMultipleOf5(){
        if (i % 5 === 0){
            outputArr.push("Fizz")
        }
    }

    function isMultipleOf3And5(){
        if (i % 3 and 5 === 0){
            outputArr.push("Fizz")
        }
    }




console.log(generateFizzBuzz(10)), 
'expectation: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz","Buzz"]';

console.log(generateFizzBuzz(20)), 
'expectation: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz",11,"Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]';

console.log(generateFizzBuzz()), 
'expectation:[]';

console.log(generateFizzBuzz(0)), 
'expectation: error';

console.log(generateFizzBuzz(-4)), 
'expectation: error';

