/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(student){
   if(student.marks > 50){
    console.log(student);
   }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if(student.marks > 50){
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  var newStudent = {id:4, name:"susan", age:"20", marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(student => student.marks > 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  var arr2 = [
    { id: 4, name: "Nitin", age: "18", marks: 80 },
    { id: 5, name: "Dravid", age: "20", marks: 85 },
    { id: 6, name: "Amol", age: "19", marks: 75 },
  ];
  var resultant = [...arr,...arr2]
  // In above line we are first coping arr and then arr2
  console.log(resultant);
}
