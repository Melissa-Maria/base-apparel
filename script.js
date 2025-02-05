const form = document.querySelector("form");
const email = document.querySelector("#email");
//create var with global scope as it will be repeated
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");

//listen for event on form and get value from email input
form.addEventListener("submit",(e) => {
    e.preventDefault(); //prevents default from running right away
    let emailValue= email.value; //create new var for something that can change
    console.log(emailValue);
    if(validateEmail(emailValue)) {
        //success condition
        //hide error styling and change h1 + p
        handleSuccess();
    } else {
        //error condition
        //show error styling
        handleError();
    }
});

function validateEmail(email) {
    const re= /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/; //pattern used to compare email value using regex
    return re.test(String(email).toLowerCase());
};

//create helper functions to handle these conditions then use these functions in if/else statement
function handleSuccess() {
    //hide error styling
    //change h1 + p
    hide(errorIcon);
    hide(errorText);
    hide(form);
    document.querySelector("h1").innerText= "Thank you!";
    document.querySelector("p").innerText= "You are subscribed";
};

function handleError() {
    //show error styles
    email.classList.add(".error"); //email represents input tag and adding class of error
    show(errorIcon);
    show(errorText);
};

//create helper function to help previous helper functions
function show(element) { //take in element to show
    element.style.display= "block";
};

function hide(element) { //take in element to hide
    element.style.display= "none";
};3
