// The reduce method of javescript 

// let arr = [1,2,3,4,5,6]

// let sum = arr.reduce( (prev , current , currIndex , arr) => {

//     return prev + current
// } , 0 )

// console.log("sum" , sum);

// Polyfill of reduce method 


Array.prototype.myreduce = function(cb , initalvalue) {

    let result ; 

    let internalInitialValue = initalvalue ;

    for(let i = 0 ; i < this.length ; i++) {
        
       result  =  cb(internalInitialValue , this[i] , i , this)
       internalInitialValue = result
   


    }
    return result
}

// Testing my reduce locally on my own array 

let testarray = [2,5,6,7,3,4]

let result = testarray.myreduce( (prev , current , index , array) => {

    return prev + current 
} , 3)

console.log("result" , result); // result 30
