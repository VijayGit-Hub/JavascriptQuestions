// https://www.geeksforgeeks.org/javascript/what-is-currying-function-in-javascript/

// *********** Q1 - implement function like this sum(2)(4)(3) *********************

// function sum(a) {

//     return function (b) {

//         return function (c) {

//             return a + b + c;
//         }
//     }
// }

// let result = sum(2)(4)(3)

// console.log(result); // 9



// The problem with above solution is that it limits us with 3 integers what if i give 4th like sum(2)(3)(4)(5)... 

// Solution of avove mentioned problem 

// function smartsum(a) {

//     let sum;

//     return function (b) {



//         if (b) {
//             sum = a + b;
//             return smartsum(sum)
//         }
//         return a
//     }

// }

// let smartresult = smartsum(2)(4)(3)(10)(10)(10)(10)(10)(10)()

// console.log(smartresult); // 69




// Partial application 
// definiaiton -  Fixing some arguments of a function now, and supplying the rest later.


// function multiply(a, b, c) {
//     return a * b * c;
// }

// function partialMultiply(a) {
//     return function (b, c) {
//         return multiply(a, b, c);
//     };
// }

// const multiplyBy2 = partialMultiply(2);
// console.log(multiplyBy2(3, 4)); // 24




// Q-3 ************************************* Convert f(a,b,c) into f(a)(b)(c) ***************************

function curry(func) {

    return function curriedFunc(...args) {
        console.log(args.length, func.length);
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                console.log("next  ->" , next);
                
                return curriedFunc(...args, ...next)
            };
        }
    }
}

const NormalSum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(NormalSum);

console.log(totalSum(1)(6)(5)(5)); // 17 
