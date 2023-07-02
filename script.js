// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  // prompt how many characters
var length = window.prompt("To Generate a Password choose the amount of Characters");
  // var for charcters
  var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];
  // window.confirm
var UpperLetters = window.confirm("Would you like to use upper case letters?");
var LowercaseLetters = window.confirm("Would you like to use lowercase letters?");
var Numbers = window.confirm("Would you like to use numbers?");
var SpecialCharacters = window.confirm("Would you like to use special characters?");
  // Use answers to make password
  var passwordChar = [];
if(LowercaseLetters){
  passwordChar = passwordChar.concat(lowercaseLetters);
}
if(UpperLetters){
  passwordChar = passwordChar.concat(upperLetters);
}
if(Numbers){
  passwordChar = passwordChar.concat(numbers);
}
if(SpecialCharacters){
  passwordChar = passwordChar.concat(specialCharacters);
}
if (length < 8 || length > 128) {
  window.alert("Invalid length Enter a number between 8 and 128.");
  return;
}
var password= "";
for(var i = 0; i < length; i++){
  var random = Math.floor(Math.random() * passwordChar.length);
  password += passwordChar[random];
}
return password;
};
generatePassword();
