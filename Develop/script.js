// Assignment code here


// 1. Arrays to list lowercase letters, uppercase letters, numbers and symbols
// 2. Write function to get promps from the user

// Special characters array variable
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "<", ">"];

// Lower case letter variable array
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Upper Case variable array
var upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());
// console.log(upperCaseLetters)

// Variable to hold numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//  Prompts Function

function getPrompts() {
  // stores variable of user prompt for length of characters and makes sure is stored as a number with parse int
     var passwordLength = parseInt((prompt("How many characters do you want your password to be? (Please choose between 8 and 128 characters")));
  
     // variable to hold temp password which we will add our criteria selections to and use to make the real password
    var tempPassword = "";

      // Checking to see if passwordLength (num of characters) and length selections are false
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a NUMBER between 8 and 128 :)");
      return tempPassword;
    }

    // Confirm prompts need to be stored outside of the if function, otherwise will keep running for length of the loop
    // These evaluate the user's options to get us the password criteria we need

    var checkLowercase = confirm("Do you want to use lowercase letters in your password?")
    var checkUpperCase = confirm("Do you want to use uppercase letters in your password?")
    var checkSymbols = confirm("Do you want to use special characters in your password?")
    var checkNumbers = confirm("Do you want to use numbers in your password?")
    
    // For loop to iterate through chosen length of password and join into our tempPassword the chosen characters
    for (let i = 0; i < passwordLength; i++) {

    /* What is this saying? As long as our prompt for lowercase AND our tempPassword is less than the total num of characters
    chosen for the passwordLength, then pull a random index from our lowercase letter array and add it to our temp password */

      if (checkLowercase && tempPassword.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * 26)
      tempPassword = tempPassword + lowerCaseLetters[randomIndex]
     }

      if (checkUpperCase && tempPassword.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * 26)
      tempPassword = tempPassword + upperCaseLetters[randomIndex]
     }

      if (checkSymbols && tempPassword.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * symbols.length)
      tempPassword = tempPassword + symbols[randomIndex]
     }

      if (checkNumbers && tempPassword.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * 10)
      tempPassword = tempPassword + numbers[randomIndex]
     }
    }
     return tempPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
