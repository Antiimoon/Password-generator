// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPassword() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(),./<>?-_=+";
  var passwordLength = 8 < 128;
  var password = "";

  var passwordLength=prompt("How many characters would you like your password to have?")
  alert("Click OK if you would like to include special characters?")
  alert("Click OK if you would like to include uppercase characters?")
  alert("Click OK if you would like to include lowercase characters?")
  alert("Click OK if you would like to include number characters?")
  
  for(let i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
 
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", getPassword);
