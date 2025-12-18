let classes = (classes) => document.getElementsByClassName(classes);
let id = (id) => document.getElementById(id);

let username = id("username");
let email = id("email");
let password = id("password");
let form = id("form");

let errorMsg = classes("error");
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

let passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});

let engine = (input, serial, message) => {

    if (input.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        successIcon[serial].style.opacity = "0";
        failureIcon[serial].style.opacity = "1";
    }

    else if (input === email && !emailRegex.test(input.value)) {
        errorMsg[serial].innerHTML = "Enter valid email (example@gmail.com)";
        successIcon[serial].style.opacity = "0";
        failureIcon[serial].style.opacity = "1";
    }

    else if (input === password && !passwordRegex.test(input.value)) {
        errorMsg[serial].innerHTML =
        "Min 8 chars, 1 Upper, 1 Lower, 1 Number, 1 Symbol";
        successIcon[serial].style.opacity = "0";
        failureIcon[serial].style.opacity = "1";
    }
    
    else {
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
    }
};
