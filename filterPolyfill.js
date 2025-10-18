// The filter method of javascript

let arr3 = [1,2,3,4,5,6]

let filter = arr3.filter( (item , index , arr) => {
    console.log("item" , item);
    console.log("index" , index);
    console.log("arr" , arr);

    return item > 3
} )

console.log("filter" , filter);