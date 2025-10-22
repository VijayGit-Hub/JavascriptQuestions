// ************** What is closure **************

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. In JavaScript,
//  closures are created every time a function is created, at function creation time.
var userAddress = "New viman nagar"
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();


myFunc();  // Here magically Mozilla is printed when i run this function 
// when makeFunc() was called it returned a method with its lexical scope 
// and since in that lexical scope name varialbe was there which had "Mozilla" value so it was also returned and binded with 
// myFunc() , so whenever it was called it had access to name varialbe


// ************************ What is  Closure scope chain ****************************************** // 


var username = "vijay" // This varialbe is in global scope and the inner function used it , and when that function returnd
// it carried this variable with itself .
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name + ' ' + username + ' ' + userAddress);
    }
    return displayName;
}

const myFuncWithGlobalScope = makeFunc();


myFuncWithGlobalScope() 




// ***********************************************************************************************// 
// Q1 : What will be logged in the console 

let count = 0; 
(function printCount() {
    if(count === 0) {
        let count = 1 ;  // Shadowing happening here
        console.log(count);
        
    }
    console.log(count);
    
})();

// Ans 1 and 0

// ****************************************************************************************************** // 

// Q2 - Write a function that would allow you to do this 

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27


// Solution 

// Formed a closure to solve the above problem , when an arrow funtion returned it took value of x with it .
// x was used to create base.
function createBase(x) {

    return (y) => {
         return x+y
    }
}

let test = createBase(6)

console.log(test(6)); // 12
console.log(test(10)); // 16


// ****************** Q3 - Time Optimization ****************************************

function find(index) {

    let a = []; 
    for( let i = 0 ; i < 1000000 ; i++) {
        a[i] = i * i ;
    }

    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("50");
find(50);
console.timeEnd("50");

// output 

// 36
// [16.29ms] 6
// 2500
// [4.33ms] 50



// ************* Solution the optimzed version of the above code with closure

function findWithClosure() {

    let a = []; 
    for( let i = 0 ; i < 1000000 ; i++) {
        a[i] = i * i ;
    }

   return ( index) => {

    console.log(a[index]);
   }
}

let closurefunction = findWithClosure()

console.time("closure1");
closurefunction(6)
console.timeEnd("closure1")

console.time("closure2");
closurefunction(50)
console.timeEnd("closure2")

// output 

// 36
// [0.09ms] closure1
// 2500
// [0.00ms] closure2



// ******************************** Q4 - Block scope and setTimeout *****************

for( var i = 0 ; i < 3 ; i++ ) {
    
    setTimeout(function log() {
        console.log(i) // What should be logged here ? 
    } , 1000) ; 
}

// O/p is 3 , 3, 3 , reason : Var is a function  scope when setTimeout runs after 1000 ms , value of i was 3 so it was printed 3 times 


// How can you still var but manage to print  0 , 1 , 2 

// Soulution 

for( var i = 0 ; i < 3 ; i++ ) {
    
   function printInSquence(valueOfiLocally) {

    setTimeout(function log() {
        console.log("valueOfiLocally" , valueOfiLocally) // What should be logged here ? 
    } , 1000) ; 
   }

    printInSquence(i) 
}

// Here value of i locally is 1 , 2 ,3  because i was sent to a method and it is in that scope 










// ****************************** Q5 - How would you use a closure to create a private counter ?  *****************************


function counter() {
    var _counter = 0
 
    function add ( increment) {
        _counter = _counter + increment ; 
    }

    function retrieveCounterValue () {
        return _counter
    }

    return { add , retrieveCounterValue }

}

let resultCounter = counter()

resultCounter.add(2);
resultCounter.add(5);
console.log(resultCounter.retrieveCounterValue());






//  ****************************** Q6 - What is module pattern  **********************
// solution : Read it in chat GPT

// https://www.patterns.dev/vanilla/module-pattern/



//  ******************************* Q7 : Make this run only once ********************************

let view ; 

function likeTheVideo() {

    view = "Roadside coder" ; 
    console.log("subscribe to " , view);
    
}

likeTheVideo(); // subscribe to  Roadside coder
likeTheVideo(); // subscribe to  Roadside coder
likeTheVideo();  // subscribe to  Roadside coder
likeTheVideo(); // subscribe to  Roadside coder
likeTheVideo(); // subscribe to  Roadside coder

// lets optimize the obove code using closre so that no initalziation happens more than 

function likeTheVideoWithCloure() {

    let counter = 0

    view = "Roadside coder" ; 
    console.log("subscribe to " , view) ;

    return () => {
 
         if(counter > 0) {
            console.log("Already subcribed");
            
         }else {
            console.log("subscribe to " , view) ;
           counter ++
         }

    }
    
}

let viewWithClosure = likeTheVideoWithCloure()

viewWithClosure() // This one subcribe it 
viewWithClosure() // This says its already subcribed
viewWithClosure() // This says its already subcribed
viewWithClosure() // This says its already subcribed


// ********************** Q8 - write  Memoize function polyfill ***********************

// *********************** Difference between closure and scope

