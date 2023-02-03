let access = document.querySelector("#access");
let signUpData = document.querySelector("#signUp");
let usersLists = [
    {
        "users": "root",
        "password": "root"
    }
]

usersLists.push({
    users: "",
    password: ""
})

access.addEventListener('click', activatePanel);

function activatePanel() {
    checkPassword();
    console.log("Login...");
}

function checkPassword(user, password) {
    user = prompt("Enter username");
    password = prompt("Enter password");
    ((us3rn4m3 == user) && (p455w0rd == password)) ? success() : denied();
}

function success() {
    window.location.assign("success.html");
    console.log("Login: success!");
}

function denied() {
    alert("Wrong Password!");
    console.log("Login: denied!");
    console.log("Try again!");
}

// New version

function start() {
    
}