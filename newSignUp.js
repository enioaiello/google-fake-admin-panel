let access = document.querySelector("#access");
let congrulationText = document.querySelector(".congrulationText");


let usersLists = [
    {
        "users": "root",
        "password": "root"
    }
]

function signIn() {   
    for (let i = 0; i <= usersLists.length; i++) {
        user = prompt("Enter username");
        password = prompt("Enter password");
        ((username == user) && (password1 == password)) ? success() : denied();
    }
}

function signUp() {
    congrulationText.classList.remove("none");
    let username = prompt("Enter a username");
    let password1 = prompt("Enter a password");
    usersLists.push({
        users: username,
        password: password
    })
}

access.addEventListener('click', signIn);