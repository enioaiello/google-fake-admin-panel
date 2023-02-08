let access = document.querySelector("#access");
let loginContent = document.querySelector("input");
let formSubmit = document.querySelector("input[type=submit]");
let passwordError = document.querySelector("#errorPassword");
let usernameInput = document.querySelector("#usernameInput");
let passwordInput = document.querySelector("#passwordInput");

const user = [
    {
        user: "root",
        password: "toor",
        token: "5665d6zd46da465z465d4a56"
    },

    {
        user: "enio",
        password: "1234",
        token: "5685d6zd46da465o465d4a56"   
    }
]

const redirect = () => {
    window.location.href = "success.html";
}

const login = (loginParameters) => {
    loginParameters.preventDefault();
    for(const i of user){
        if(usernameInput.value === i.user && passwordInput.value === i.password){
            redirect()
            localStorage.setItem('token', i.token)  
            break;
        }else{
            passwordError.classList.remove("none");
        }
    }
}
function hideErrorText() {
    passwordError.classList.add("none");
}
formSubmit.addEventListener("click", login);