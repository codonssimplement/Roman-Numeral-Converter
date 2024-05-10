//Variables
const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');


//Check condition of converter
const conditionChecker = () => {
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {

        outputDiv.innerText = "Please enter a valid number";

    } else if (number <= 0) {
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        outputDiv.innerText = "Please enter a number less than or equal to 3999";
    } else {
        outputDiv.innerText = convertToRoman(number);
    }
}

//How we converter to roman
const convertToRoman = (e) => {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let key in romanNumerals) {
        while (e >= romanNumerals[key]) {


            roman += key;
            e -= romanNumerals[key];

        }
    }

    return roman;
}
//Active Event on convert button
convertBtn.addEventListener('click', conditionChecker);