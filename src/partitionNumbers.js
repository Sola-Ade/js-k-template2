/*Write a function, `partitionNumbers` , which takes: 

- an array of numbers
- a threshold number

and returns an array with exactly two elements, those being:

1. an array of the numbers greater than or equal to the threshold number
2. an array of the numbers lower than the threshold number */


let greaterThanOrEqualArr = []
let lessThanArr = []

function partitionNumbers(inputArr, N) {
    for (let i = 0; i < Array.length; i++) {
        if (i >= N) {
            greaterThanOrEqualArr.push(i)
        } else {
            lessThanArr.push(i)
        }
    }
    
    let outputArr = [greaterThanOrEqualArr, lessThanArr]
    return outputArr
}