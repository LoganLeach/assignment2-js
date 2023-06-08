

// constants for query selector
const myStudentId = document.querySelector("#myStudentId");
const customNumber = document.querySelector("#customNumber");
const custColorBtn = document.querySelector(".custColor");
const randColorBtn = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const images = document.querySelector("#images");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const number = parseInt(customNumber.value);

    if (isNaN(number) || number < 0 || number > 100) {
        document.body.style.backgroundColor = "red";
    } else if (number >= 0 && number <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (number > 20 && number <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (number > 40 && number <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (number > 60 && number <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (number > 80 && number <= 100) {
        document.body.style.backgroundColor = "yellow";
    }

    myStudentId.textContent = "Student ID: 200524201";
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumber.value = randomNumber;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    const imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

    for (let i = 0; i < imageNames.length; i++) {
        const option = document.createElement("option");
        option.value = imageNames[i];
        option.textContent = imageNames[i];
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `images/${selectedImage}`;
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener("click", changeCustomColor);
randColorBtn.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// event listeners for on change event of select
window.addEventListener("load", addList);
