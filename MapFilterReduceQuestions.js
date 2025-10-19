// **************************** Q1 - give only the names of the stududent in upper letter ***********

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Aarav", rollNumber: 32, marks: 92 },
//     { name: "Sneha", rollNumber: 33, marks: 76 },
//     { name: "Riya", rollNumber: 34, marks: 88 }
// ];

// let result = students.map( (student) => {

//     return student.name.toUpperCase()
// })

// console.log(result);

// ****************************Q2 - give name of the student having more that 75 marks ****************

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Aarav", rollNumber: 32, marks: 60 },
//     { name: "Sneha", rollNumber: 33, marks: 76 },
//     { name: "Riya", rollNumber: 34, marks: 55 }
// ];

// let result = students.filter( (student) => {

//     return student.marks > 75
// })

// console.log(result);

// ****************************************Q3 - sum of marks of all the students **************************

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Aarav", rollNumber: 32, marks: 60 },
//     { name: "Sneha", rollNumber: 33, marks: 76 },
//     { name: "Riya", rollNumber: 34, marks: 55 }
// ];

// // *************** solution 1 **************

// let result2 = students.map((student) => {
//     return student.marks
// })

// let result  = result2.reduce((prev , current ) => {

//     return prev + current

// })

// console.log(result);

// *************** solution 2 **************

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Aarav", rollNumber: 32, marks: 60 },
//     { name: "Sneha", rollNumber: 33, marks: 76 },
//     { name: "Riya", rollNumber: 34, marks: 55 }
// ];

// let result = students.reduce( ( prev , current) => prev + current.marks , 0)

// console.log(result);

// ************************************* Q4 - Return only name of student who scored more than 60 ************

// let students = [
//     { name: "Piyush", rollNumber: 31, marks: 80 },
//     { name: "Aarav", rollNumber: 32, marks: 60 },
//     { name: "Sneha", rollNumber: 33, marks: 76 },
//     { name: "Riya", rollNumber: 34, marks: 55 }
// ];

// // The sexy part is chaning of filer and map here 
// let result = students.filter((student) => student.marks > 60).map((student) => student.name)

// console.log(result);

// **********************Q5 - Return total marks for students with marks greater than 60  **************
//                            after 20 marks have been added to those who scored less than 60      ****************


let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Aarav", rollNumber: 32, marks: 60 },
    { name: "Sneha", rollNumber: 33, marks: 76 },
    { name: "Riya", rollNumber: 34, marks: 55 }
];

let result = students.map((student) => {

         if( student.marks < 60) {
            student.marks = student.marks + 20
         }
         return student
}).reduce((prev , current) => prev + current.marks , 0)

console.log(result);








