let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function addToHome(score) {
  homeScore += score;
  homeScoreEl.innerText = homeScore;
  checkLead();
}

function addToGuest(score) {
  guestScore += score;
  guestScoreEl.innerText = guestScore;
  checkLead();
}

function newGame() {
  homeScore = 0;
  homeScoreEl.innerText = homeScore;
  guestScore = 0;
  guestScoreEl.innerText = guestScore;
  homeScoreEl.classList.remove("lead");
  guestScoreElScoreEl.classList.remove("lead");
}

function checkLead() {
  if (homeScore > guestScore) {
    homeScoreEl.classList.add("lead");
    guestScoreEl.classList.remove("lead");
  } else if (guestScore > homeScore) {
    guestScoreEl.classList.add("lead");
    homeScoreEl.classList.remove("lead");
  } else {
    homeScoreEl.classList.remove("lead");
    guestScoreElScoreEl.classList.remove("lead");
  }
}
