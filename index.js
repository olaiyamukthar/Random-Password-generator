const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let optionOne = document.getElementById("textFeildOne")
let optionTwo = document.getElementById("textFeildTwo")
let passwordLength = 15
 
function firstRandomCharacters() {
    let randomOne = Math.floor ( Math.random() * characters.length ) 
    return characters[randomOne] 
}

function generateRandomPasswordOne() {
    let randomPasswordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += firstRandomCharacters()
    }
    return randomPasswordOne
}

function secondRandomCharacters() {
    let randomTwo = Math.floor ( Math.random() * characters.length ) 
    return characters[randomTwo] 
}

function generateRandomPasswordTwo() {
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += firstRandomCharacters()
    }
    return randomPasswordTwo
}


function password() {
    let firstRandomPassword = generateRandomPasswordOne()
    optionOne.textContent = firstRandomPassword
    let secondRandomPassword = generateRandomPasswordTwo()
    optionTwo.textContent = secondRandomPassword
}