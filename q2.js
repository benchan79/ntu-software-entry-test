/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
const names_array = [];

function addPatient(patientName){
    // Task 2: Add code here
    names_array.push(patientName)
}

// Task 3: Add code here
function listPatient(){
    // Print out all the names in one array as per example indicated
    console.log(names_array)
    
    console.log()

    // Print out one name per line
    for (const patient_name of names_array) {
        console.log(patient_name);
      }
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]