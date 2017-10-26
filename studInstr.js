var students = [ 

    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]


for (let i=0;i<students.length;i++){
    let student=students[i];
    console.log(student.first_name , student.last_name);
}

students.map( (elem) => {
    console.log(elem['first_name'], elem['last_name']);
})



//Another way to do this:

// students.map( (elem) => {
//     console.log(elem['first_name'], elem['last_name']);
// })

//For second part just use the .length attribute on each of the elements: elem['key'].length
//   students.map(function(student) { 
//     return student['first_name'.length] + student['last_name'.length]; 
//   }); // [8, 6, 7, 9]
  
//   students.map((student) => {
//     return student['first_name'.length] + student['last_name'.length];
//   }); // [8, 6, 7, 9]
  
//   students.map(student => student['first_name'.length] + student['last_name'.length]) // [8, 6, 7, 9]