// Assignment code here


// 1. Arrays to list lowercase letters, uppercase letters, numbers and symbols
// 2. Write function to get promps from the user

// var passwordLength = "";
// var choiceArr = [];

// Special characters array variable
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "<", ">"];

// lower case array
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Upper Case variable array
var upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());
// console.log(upperCaseLetters)

// Variable to hold numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//  Prompts Function

function getPrompts() {
     var passwordLength = parseInt((prompt("How many characters do you want your password to be? (Please choose between 8 and 128 characters")));

    var tempPassword = "";

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a NUMBER between 8 and 128 :)");
      return tempPassword;
    }
    var checkLowercase = confirm("Do you want to use lowercase letters in your password?")
    var checkUpperCase = confirm("Do you want to use uppercase letters in your password?")
    var checkSymbols = confirm("Do you want to use special characters in your password?")
    var checkNumbers = confirm("Do you want to use numbers in your password?")
    
    for (i = 0; i < passwordLength; i++) {

     if (checkLowercase && tempPassword.length < passwordLength) {
      // choiceArr = choiceArr.concat(lowerCaseLetters);
      var randomIndex = Math.floor(Math.random() * 26)
      tempPassword = tempPassword + lowerCaseLetters[randomIndex]
     }
     if (checkUpperCase && tempPassword.length < passwordLength) {
      // choiceArr = choiceArr.concat(upperCaseLetters);
      var randomIndex = Math.floor(Math.random() * 26)
      tempPassword = tempPassword + upperCaseLetters[randomIndex]
     }
     if (checkSymbols && tempPassword.length < passwordLength) {
      // choiceArr = choiceArr.concat(symbols);
      var randomIndex = Math.floor(Math.random() * symbols.length)
      tempPassword = tempPassword + symbols[randomIndex]
     }
     if (checkNumbers && tempPassword.length < passwordLength) {
      // choiceArr = choiceArr.concat(numbers)
      var randomIndex = Math.floor(Math.random() * 10)
      tempPassword = tempPassword + symbols[randomIndex]
     }
    }
     return tempPassword;

}
// console.log(getPrompts())




  // 1. Prompt the user for the password criteria 
  //  a. PW length between 8 - 128 characters

  
  // 2. Validate input
  // 3. Generate password 

// Display generated password 




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
