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
    var allowedChars = ""
    var passwordLength = prompt("How many characters do you want?")
    var amountParse = parseInt(passwordLength)
    if (amountParse < 8 || amountParse > 128) {
        alert("No No No... between 8-128 Characters Please")
    }
    else {
        var includeSpecial = confirm("Include special characters... $^&*# ect..")
        var includeUppercase = confirm("Include capital letters?")
        var includeLowercase = confirm("Include lowercase characters?")
        var includeNumeric = confirm("Do you want to include numbers?")
    }
    for (let i = 0; i < amountParse; i++) {



        if (includeSpecial && allowedChars.length<amountParse) {
            var index = Math.floor(Math.random() * specialChars.length)
            allowedChars += specialChars[index]
        }
        if (includeLowercase && allowedChars.length<amountParse) {
            var index = Math.floor(Math.random() * lowercaseChars.length)
            allowedChars += lowercaseChars[index]
        }
        if (includeUppercase && allowedChars.length<amountParse) {
            var index = Math.floor(Math.random() * uppercaseChars.length)
            allowedChars += uppercaseChars[index]
        }
        if (includeNumeric && allowedChars.length<amountParse) {
            var index = Math.floor(Math.random() * numericChars.length)
            allowedChars += numericChars[index]
        }
    }
    return allowedChars


}
// Function to handle password generation and display
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
