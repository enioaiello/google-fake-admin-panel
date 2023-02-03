let logoutButton = document.querySelector(".logout");
let logoutText = document.querySelector(".logoutText");
let timer = 11;
function logout() {
    window.location.assign("index.html");
}
function confirmLogout() {
    setInterval( function(){
        timer -= 1;
        logoutText.innerHTML = "Logout in " + timer + " seconds";
    }, 1000)
    logoutText.classList.remove("none");
    console.log("Security: Logout in 10 seconds");
    setTimeout(logout, 10000);
}
logoutButton.addEventListener("click", confirmLogout);