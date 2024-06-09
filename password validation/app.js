let username = document.getElementById('username');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function validation(){
    event.preventDefault();
    if(emailReg.test(username.value) && passReg.test(password.value)){
        if(password.value === confirmPassword.value){
            window.location.href="thanks.html";
        }
        else{
            swal("Error!", "Password are Not Matched!");
        }
    }
    else{
        swal("Error!", "Email or Password should be according to Rules");
    }
}

let isShow = false;
function showEye(){
    let icon = document.getElementById('icon');
    isShow = !isShow;
    if(isShow){
        icon.className="fa-regular fa-eye";
        password.type="text";
    }
    else{
        icon.className="fa-regular fa-eye-slash";
        password.type="password";
    }
}

let isOpen = false;
function cShowEye(){
    let icon = document.getElementById('icon');
    isOpen = !isOpen;
    if(isOpen){
        icon.className="fa-regular fa-eye";
        confirmPassword.type="text";
    }
    else{
        icon.className="fa-regular fa-eye-slash";
        confirmPassword="password";
    }  
}