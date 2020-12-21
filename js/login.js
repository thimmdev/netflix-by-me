function showLogin(){
    const loginWindow = document.querySelector('.login-window');
    console.log (loginWindow);
    loginWindow.classList.remove('hide');
    console.log (loginWindow);

}

function passwordHidden() {
    const userpassword = document.querySelector('#user-password');
    if (userpassword.type === "password") {
        userpassword.type = "text";
    }

    else {
        userpassword.type = "password"
    }
}

function getData () {
    const userLogin = document.querySelector('#user-login');
    const userPassword = document.querySelector('#user-password');
   
    console.log (`Usuário: ${userLogin.value}, Senha: ${userPassword.value}`);
}