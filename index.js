function generatePassword(length, lowercase, uppercase, numbers, symbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomNumber);
    }

    return password;
}



function generateButton() {
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("result").innerHTML = password;

    if (password.length <= 0) {
        console.log("No password entered or no character types selected.");
    } else {
        console.log("Password generated.");
    }
    return password;
}

generatePassword().addEventListener('click', generateButton);
