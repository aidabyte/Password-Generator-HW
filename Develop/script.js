// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");



// variables for the user to choose from
  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChar = ["!","@","#","$","%","&",];

  var cLength = "";
  var cSpecialCharacter;
  var cNumberCharacter;
  var cUpperCase;
  var cLowerCase;



//prompts for the user
function generatePassword(){
//asking the proper length of the numbers
  var passLength = prompt("choose a number between 8 and 128");
  if (passLength< 8 || passLength> 128) {
    alert("You're password isnt between 8 of 128 characters, please try again");
    return;
  }

  //confirm all the different questions that the user will be asked
var clowerCase = confirm ("Do you want lowercase letters?");
var cupperCase = confirm ("Do you want lowercase letters?");
var cnumbers = confirm ("Do you want numbers?");
var cspecialChar = confirm ("Do you want special characters?");

//confirm 















  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
