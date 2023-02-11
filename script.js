/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(arr=>{
        if(arr.marks>50){
            console.log("student name more than 50 marks using map"+arr.name+" "+arr.marks);
        }
    });

  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(arr=>{
        if(arr.marks>50){
            console.log("student name more than 50 marks using forEach "+arr.name+" "+arr.marks);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newst = {
      id :4,
      name:"susan",
      age : "20",
      marks : 45,
    };
    arr.push(newst);
    console.log(newst);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter(student => student.marks >= 50);
  console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        {id: 4, name: "Sarah", age: "22", marks: 60},
        {id: 5, name: "Mike", age: "23", marks: 40},
        {id: 6, name: "Emma", age: "24", marks: 70}
      ];
      let concatarr = arr.concat(newArr);
      console.log(concatarr);
  }
