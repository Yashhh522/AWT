form.addEventListener("submit", (e) => {
    const form = document.querySelector("form");
    const fullname = document.getElementById("name").value;
    const uname = document.getElementById("uname").value;
    const gender = document.getElementsByName("gender").value;
    const contact = document.getElementById("contact").value;
    const pass = document.getElementById("pass").value;
    const confirmPass = document.getElementById("confirmpass").value;
    const mail = document.getElementById("mail").value;
    const state = document.getElementById("state").value;
    const agree = document.getElementById("agree").value;
    var unamevalid = /^[A-Za-z0-9]+$/;
    var pwdvalid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/;
    var phonevalid = /^[0-9]{10}$/;

    var errorMessages = document.getElementsByClassName("error");
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].remove();
    }

    var formValid = true;
    if (!unamevalid.test(uname)) {
        showError("username", "Username must be alphanumeric.");
        formValid = false;
    }
    if (!pwdvalid.test(pass)) {
        showError("password", "Password must be alphanumeric with at least one special symbol (@$!%*#?&) and 6 to 10 characters long.");
        formValid = false;
    }
    if (pass !== confirmPass) {
        showError("confirmPassword", "Passwords do not match.");
        formValid = false;
    }

    if (!phonevalid.test(contact)) {
        showError("phone", "Phone number must be 10 digits.");
        formValid = false;
    }

    // Basic email validation using regex
    var emailvalid = /^\S+@\S+\.\S+$/;
    if (!emailvalid.test(mail)) {
        showError("email", "Invalid email address.");
        formValid = false;
    }

    if (state === "") {
        showError("state", "Please select a state.");
        formValid = false;
    }

    if (!agree) {
        showError("agreement", "You must agree to the terms and conditions.");
        formValid = false;
    }

    if (formValid) {
        // Redirect to the Login page if the form is valid
        window.location.href = "login.html";
    }

    return false; // Prevent form submission for now

    function showError(inputName, message) 
    {
        var errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        errorDiv.style.color = "red";
        errorDiv.textContent = "*" + message;

        var inputField = document.getElementById(inputName);
        inputField.insertAdjacentElement("afterend", errorDiv);
    }
});

   /* let valid = true;
    if(fullname == " ")
    {
        document.getElementById("nerror").innerHTML = "*Please enter the name!";
        valid = false;
    }
    if(username == " ")
    {
        document.getElementById("unerror").innerHTML = "*Please enter the username!";
        valid = false;
    }
    else if(username.length < 5)
    {
        document.getElementById("unerror").innerHTML = "*Username must contain atleast 5 characters!"
        valid = false;
    }
    if(gender == " ")
    {
        document.getElementById("generror").innerHTML = "*Please select your gender!"
        valid = false;
    }
    if(pass == " ")
    {
        document.getElementById("passerror").innerHTML = "*Please enter the password!"
        valid = false;
    }
    else if(pass.length < 8)
    {
        document.getElementById("passerror").innerHTML = "*Password should contain atleast 8 characters!"
        valid = false;
    }
    if(confirmPass == " ")
    {
        document.getElementById("conPasserror").innerHTML = "*Please enter the password!"
        valid = false;
    }
    else if(confirmPass != pass)
    {
        document.getElementById("conPasserror").innerHTML = "*Incorrect password!"
        valid = false;
    }
    if(email == " ")
    {
        document.getElementById("iderror").innerHTML = "*Please enter your email!"
        valid = false;
    }
    if(phone == " ")
    {
        document.getElementById("conerror").innerHTML = "*Please enter the contact number!"
        valid = false;
    }
    if(!gender.checked[0] && !gender.checked[1])
    {
        document.getElementById("generror").innerHTML = "*Please select your gender!"
        valid = false;
    }
    if(state == " ")
    {
        document.getElementById("locerror").innerHTML = "*Please select your state!"
        valid = false;
    }
});*/