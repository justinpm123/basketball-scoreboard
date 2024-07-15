let scoreHome = 0;
let scoreGuest = 0;
let homeDisplay = document.getElementById("score_home");
let guestDisplay = document.getElementById("score_guest");
let homeButtons = document.getElementById("home_btns");
let guestButtons = document.getElementById("guest_btns");
let newGameBtn = document.getElementById("new_game")

function incrementHome1(){
    scoreHome = scoreHome + 1;
    homeDisplay.textContent = scoreHome;
}
function incrementHome2(){
    scoreHome = scoreHome + 2;
    homeDisplay.textContent = scoreHome;
}
function incrementHome3(){
    scoreHome = scoreHome + 3;
    homeDisplay.textContent = scoreHome;
}

function incrementGuest1(){
    scoreGuest = scoreGuest + 1;
    guestDisplay.textContent = scoreGuest;
}
function incrementGuest2(){
    scoreGuest = scoreGuest + 2;
    guestDisplay.textContent = scoreGuest;
}
function incrementGuest3(){
    scoreGuest = scoreGuest + 3;
    guestDisplay.textContent = scoreGuest;
}
function newGame(){
    scoreHome = 0;
    scoreGuest = 0;
    homeDisplay.textContent = scoreHome;
    guestDisplay.textContent = scoreGuest;
}
document.addEventListener("click", function updateScoreDisplay() {
    if (scoreHome > scoreGuest) {
        homeDisplay.style.color = "#00ff00";
        guestDisplay.style.color = ""; // Reset guest color
    } else if (scoreGuest > scoreHome) {
        guestDisplay.style.color = "#00ff00";
        homeDisplay.style.color = ""; // Reset home color
    } else {
        // Handle tie (optional)
        homeDisplay.style.color = "";
        guestDisplay.style.color = "";
    }
});