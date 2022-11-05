// Assignment code here

var characterLength = 12;
var choiceArr = [];

// Special characters array variable
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "<", ">"];

// lower case array
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Upper Case variable array
var upperCaseLetter = lowerCaseLetters.map(letter => letter.toUpperCase());

// Variable to hold numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];




function generatePassword() {
  // will generate password based on criteria provided
}



  // 1. Prompt the user for the password criteria 
  //  a. PW length between 8 - 128 characters

  function getPrompts() {
    charLength = window.prompt("Choose a total number of characters for your password between 8 and 12")
  }

  
  // 2. Validate input
  // 3. Generate password 

// Display generated password 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
