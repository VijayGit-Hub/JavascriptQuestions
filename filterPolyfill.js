// The filter method of javascript

// let arr3 = [1,2,3,4,5,6]

// let filter = arr3.filter( (item , index , arr) => {
//     console.log("item" , item);
//     console.log("index" , index);
//     console.log("arr" , arr);

//     return item > 3
// } )

// console.log("filter" , filter);

// Polyfill of filter method

Array.prototype.myfilter = function(cb) {

    let filteredArray = []

    for(let i = 0 ; i < this.length ; i++){

        if(cb(this[i] , 1 , this)) { 
         filteredArray.push(this[i])
        }
    }

    return filteredArray
}

// Testing my own polyfill now 

let arr  = [1,2,3,4,5]

let result  = arr.myfilter( (value ,  index , arr) => {

    return value % 2 === 0 
})

console.log(result);
