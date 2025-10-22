


// A very good example to understand the "this" keyword and apply method , also bind() and call() methods
function greet(city, country) {
    console.log(`Hello ${this.name} from ${city}, ${country}`);
}

const person = { name: "Vijay" };

greet.apply(person, ["Delhi", "India"]);
// Hello Vijay from Delhi, India

greet.call(person, "Delhi", "India");
// Hello Vijay from Delhi, India

const newFn = greet.bind(person, "Delhi", "India");
newFn(); // Now executed later ✅









// *********************************** Write the polyfill of once function of lodash library *************


function polyfillOfOnce(method, context) {

    let response;

    return function () {  // Here We are forming a closure in a very clever way 

        if (method) {

            response = method.apply(context || this, arguments) // very efficien use of arguments and apply
            method = null;
        }
        
    }

}

let log = polyfillOfOnce(() => console.log("Hello testing once"))

log();
log();
log();
log();
log();
log();
log();
log();
log();

// "Hello testing once" was called only one time , no matter n number of times log() was called 
