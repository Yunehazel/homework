// Get user input using prompt
let userString = prompt("Enter a string:");

// Check the length of the string
let stringLength = userString.length;

// Display the result
console.log("The length of the entered string is: " + stringLength);





function checklength (value){
    return value.length <= 20;

}

while (isNaN(+register_count) || !validateRange(register_count, 1, 10) || validateBlankValue(register_count)) {
    if (isNaN(+register_count))
        alert("Register Count must be Number");

    if (!isNaN(+register_count) && validateBlankValue(register_count))
        alert("Register Count cannot be blank!");

    if (!isNaN(+register_count) && !validateBlankValue(register_count) && !validateRange(register_count, 1, 10))
        alert("Register Count must be between 1 and 10");

    register_count = prompt("Enter the count of students to register");
}