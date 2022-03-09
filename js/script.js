"use strict";
const generateButton = document.getElementById("birth-date");
// const day = ("sun", "mon", "tue", "wed", "fri", "sat");
const males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Satruday"];

generateButton.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(createName());
});

const createName = () => {
    const dateOfBirth = document.querySelector("#date").value;
    const genderChoice = document.querySelector("input[type='radio']:checked");

    const birthDay = new Date(dateOfBirth)
    const day = birthDay.getDay();
    const akanName = (gender) => { 
        if(gender.value === "male")
            return(males[day]);
        return(females[day]);
    }
    return akanName(genderChoice)
}
// const submition = document.getElementById("button");

// const submitionDate = document.querySelector(".output");




// generateButton.addEventListener("submit", (e) => {
//     e.preventDefault();
// const newDate = document.getElementById("date").value;
// const setDate = new Date(newDate);
// const initialYear = setDate.getFullYear();
// const newEntry = setDate.getDay();
// let createName = (choiceOfGender) => {
// if (choice.value === "male"){
// submitionDate.innerHTML = `Here is your Akan name: ${males[newEntry]}`;
// }
// if (choice.value === "female"){
// submitionDate.innerHTML = `Here is your Akan name: ${females[newEntry]}`;
// }
// }
// }
// ) 