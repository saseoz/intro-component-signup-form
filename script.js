const inputs = document.querySelectorAll(".input");
const email = document.getElementById("email");
const form = document.getElementById("form");

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validation(field) {
    const icon = field.nextElementSibling;
    const msg = field.nextElementSibling.nextElementSibling;
    
    if (field.value === "") {
        icon.classList.add("show");
        msg.classList.add("show");
        field.style.border = "2px solid red";
        field.setAttribute("placeholder", ""); 
        return false;
    } else {
        icon.classList.remove("show");
        msg.classList.remove("show");
        field.style.border = "";
        return true;
    }
}

function validateMail() {
    let icon = email.nextElementSibling;
    let msg = email.nextElementSibling.nextElementSibling;
    if (!email.value.match(pattern)) {
        icon.classList.add("show");
        msg.classList.add("show");
        email.style.border = "2px solid red";
        email.setAttribute("placeholder", ""); 
        return false;
    } else {
        icon.classList.remove("show");
        msg.classList.remove("show");
        email.style.border = "";
        return true;
    }
}

inputs.forEach(function(input) {
    input.addEventListener("keyup", function() {
        validation(input);
    });
});

email.addEventListener("keyup", validateMail);

form.addEventListener("submit", function(event) {
    let isValid = true;
    // Validate each input field
    inputs.forEach(function(input) {
        if (!validation(input)) {
            isValid = false;
        }
    });
    // Validate email
    if (!validateMail()) {
        isValid = false;
    }
    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    } 
});
