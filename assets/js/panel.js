let logoutButton = document.querySelector(".logout");
let logoutText = document.querySelector(".logoutText");
let welcomeText = document.querySelector("#welcomeText");
let timer = 6;

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

const userNameDisplay = () => {
    let token = localStorage.getItem("token")
    for(const i of user){
        if(token === null){
            window.location.assign("../../index.html");
        }else if(i.token === token){
            welcomeText.innerHTML = "Welcome " + i.user + "-user!";
        }
    }
}   

userNameDisplay()

const logout = () => {
    window.location.assign("../../../index.html");
    localStorage.removeItem("token")
}

const confirmLogout = () => {
    setInterval( function(){
        timer -= 1;
        logoutText.innerHTML = "Logout in " + timer + " seconds";
    }, 1000)
    logoutText.classList.remove("none");
    console.log("Security: Logout in 5 seconds");
    setTimeout(logout, 5000);
}
logoutButton.addEventListener("click", confirmLogout);