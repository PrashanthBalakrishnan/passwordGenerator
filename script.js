let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")

let alphaLower = "abcdefghijklmnopqrstuvwxyz".split();
let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
let nums = "1234567890".split();
let sym = " ~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/".split();
alphaNumChar = alphaLower + alphaUpper + nums + sym;

function generatePassword() {
    firstOption = "";
    secondOption = "";
    thirdOption = "";
    fourthOption = "";

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 94)
        firstOption += alphaNumChar[randomNum];
    }

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 94)
        secondOption += alphaNumChar[randomNum];
    }

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 94)
        thirdOption += alphaNumChar[randomNum];
    }

    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 94)
        fourthOption += alphaNumChar[randomNum];
    }

    option1.textContent = firstOption;
    option2.textContent = secondOption;
    option3.textContent = thirdOption;
    option4.textContent = fourthOption;
}
