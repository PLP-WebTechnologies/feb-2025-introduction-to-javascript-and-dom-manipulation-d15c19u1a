const originalHeadingText = "Welcome! 👋";
  
function shakeCard() {
  const card = document.getElementById("card-to-shake");
  const heading = card.querySelector("h1");

  heading.textContent = "Whoa! That tickled 😄";

  card.classList.add("shake", "funky-colors", "burst");

  setTimeout(() => {
    card.classList.remove("shake", "funky-colors", "burst");
    heading.textContent = originalHeadingText;

    // Fade in the original text
    heading.classList.add("fade-in");

    // Remove fade-in class after animation to reset
    setTimeout(() => {
    heading.classList.remove("fade-in");
    }, 500);
  }, 1000); // allow time for animation + reading the joke
}


function changeSecondCardColor() {
  const card = document.getElementById("card-to-color");
  const randomBg = `hsl(${Math.floor(Math.random() * 360)}, 60%, 80%)`;
  const randomText = `hsl(${Math.floor(Math.random() * 360)}, 50%, 30%)`;
  card.style.backgroundColor = randomBg;
  card.style.color = randomText;
}

function toggleThirdCard() {
  const card = document.getElementById("card-to-toggle");
  const button = document.getElementById("toggleButton");
  const isHidden = card.style.display === "none";
  card.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "Hide Third Card" : "Show Third Card";
}