// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialChars = "!@#$%^&*()_+?:;[]{}"
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXWZ"
var numericChars = "1234567890"

// Write password to the #password input
function generatePassword() {
  var password = ""
  var chosenChars = ""
  var passwordLength = prompt("How many characters do you want?")
  var amountParse = parseInt(passwordLength)
  if (amountParse < 8 || amountParse > 128) {
    alert("No No No... between 8-128 Characters Please")
  }
  else {
    var includeSpecial = confirm("Include special characters... $^&*# ect..")
    var includeUppercase = confirm("Include capital letter?")
    var includeLowercase = confirm("Include lowercase characters?")
    var includeNumeric = confirm("Do you want to include numbers?")
  }
  if (includeSpecial) {
    allowedChars += specialChars;
  }
    if (includeLowercase) {
      lowercaseChars += lowercaseChars;
    }
      if (includeUppercase) {
        allowedChars += uppercaseChars;
      }
        if (includeNumeric) {
          allowedChars += numericChars;
        }
  
      
      // Function to handle password generation and display
      function generatePasswordHandler() {
        var password = generatePassword();
      
        if (password) {
          passwordDisplay.textContent = password;
        }
      } 
       
      }


      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

      }

      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
