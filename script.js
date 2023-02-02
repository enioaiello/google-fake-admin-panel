// EXO - USER TERNAIRE
// Créer 2 variables : une pour le pseudo et une pour le mot de passe
// écrivez la fonction checkPassword() qui prend 2 paramètres (user, password) pour vérifier si le password est correct et affichez "Welcome, [user]!" si le password est incorrect, sinon affichez "Wrong password"
// Vous DEVEZ utiliser l'opérateur ternaire pour écrire la condition
let us3rn4m3 = "enioaiello";
let p455w0rd = "flash";
let access = document.querySelector("#access");

access.addEventListener('click', activatePanel);

function activatePanel() {
    checkPassword();
}

function checkPassword(user, password) {
    user = prompt("Enter username");
    password = prompt("Enter password");
    // if ((us3rn4m3 == user) && (p455w0rd == password)) {
    //     window.location.assign("success.html");
    // } else {
    //     alert("Wrong Password!");
    // }
    ((us3rn4m3 == user) && (p455w0rd == password)) ? window.location.assign("success.html") : alert("Wrong Password!");
}