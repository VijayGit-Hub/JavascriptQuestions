// The map method of javascript

// let arr3 = [1,2,3,4,5,6]

// let map = arr2.map( (item , index , arr) => {
//     console.log("item" , item);
//     console.log("index" , index);
//     console.log("arr" , arr);

//     return item * 2
// } )

// console.log("map" , map);



// Poly fill of map method

Array.prototype.myMap = function(callback) {
    let result = []
    for(let i = 0; i < this.length; i++) { // this here represents the array upon which the method is called example arr2.myMap
        result.push(callback(this[i], i, this))
    }
    return result
}

// *********** Example of my own map method ***********

let arr2 = [1,2,3,4,5,6]

let map3 = arr2.myMap( (item , index , arr) => {
    console.log("item" , item);
    console.log("index" , index);
    console.log("arr" , arr);

    return item
} )

console.log("map3" , map3);