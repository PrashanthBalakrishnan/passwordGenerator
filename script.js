const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generateBtn = document.getElementById("generateBtn")
const field1 = document.getElementById("password1")
const field2 = document.getElementById("password2")



function getRandomPass() {
    const password = []
    for (let i = 0; i < 15; i++) {
        password.push(characters[Math.floor(Math.random() * characters.length)])
    }
    return (password.join(""))
}

function displayFunction() {
    field1.innerText = getRandomPass()
    field2.innerText = getRandomPass()
}

generateBtn.addEventListener("click", displayFunction)





