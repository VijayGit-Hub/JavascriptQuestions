 // **************** This below arrow function will not log anything because it was just defined but not invoked 
 
 () => {

   return  console.log("hello world iife , it will not be called "); 
    
}



// // let make the above function and IIFE function to invoke it 



( (x) => {

    return  console.log("hello world iife after wrapping it " + x); // 12 will be printed here 
     
 })(12)



// // ************ Normal way of declaring function and then calling it just below like logging() 

function logging() {

    return console.log("hello world");
    
}

logging()


//  *****************  Q1 IIFE - O/P based question  ********************

(function(x) {
    return (
        function(y) {
            console.log(x); // 1 is the output becaue of closure 
            
        }
    )(2)
})(1)


// *******************************************

let num1 = 20 , num2 = 3 , num3 = "Roadside coder";

function multiply() {
    return num1 * num2
}

console.log( multiply()); // 60 



// ************************ Q2 variant 1 ***************************

for(let i = 0 ; i < 5 ; i++) {
    setTimeout( function() {
        console.log(i); // 0, 1,2,3,4, 
        
    } , i*1000)
}


// ************************ Q2 variaant 2  ***************************
for(var i = 0 ; i < 5 ; i++) {
    setTimeout( function() {
        console.log(i); // 5,5,5,5,5
        
    } , i*1000)
}

// expalnation of Q2 variaant 2  Step-by-step:
// 	1.	The variable i is declared using var, which means it has function scope (not block scope).
// 	2.	The for loop runs quickly, setting up 5 timeouts, each scheduled after 0s, 1s, 2s, 3s, and 4s.
// 	3.	By the time the first setTimeout callback executes, the loop has already completed — and i has become 5.
// 	4.	All 5 callbacks refer to the same i, and when they run, they all see i = 5.








