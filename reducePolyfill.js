// The reduce method of javescript 

let arr = [1,2,3,4,5,6]

let sum = arr.reduce( (prev , current , currIndex , arr) => {

    return prev + current
} )

console.log("sum" , sum);