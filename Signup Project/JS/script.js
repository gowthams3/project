let form = document.getElementById("form");
let username =document.getElementById("username");
let password =document.getElementById("password");
let email =document.getElementById("email");
let password2 =document.getElementById("re-password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let repasswordValue = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, "Username can not be blank");
    }else if(usernameValue.length < 8){
        setErrorFor(username, "Username must be 8 characters");
    }
    else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, "Email can not be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, "Password can not be blank");
    }else if(passwordValue.length < 8){
        setErrorFor(password, "Password must be 8 characters");
    }
    else if(passwordValue != repasswordValue){
        setErrorFor(password2, "Password doesn't match");
    }
    else
    {
        setSuccessFor(password);
    }

    if(repasswordValue === ''){
        setErrorFor(password2, "Password can not be blank");
    }else if(passwordValue != repasswordValue){
        setErrorFor(password2, "Password doesn't match");
    }else
    {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
