const quote = "Roblox is the best game for building, playing, and hanging out with friends.";
const likeText = "Thumbs up";
const message = "You liked this Roblox quote!";

const likeButton = document.getElementById("likeButton");
const status = document.getElementById("status");

function toggleLike() {
  const isSelected = likeButton.classList.toggle("selected");
  likeButton.setAttribute("aria-pressed", String(isSelected));

  if (isSelected) {
    likeButton.querySelector(".label").textContent = likeText;
    status.textContent = message;
  } else {
    likeButton.querySelector(".label").textContent = "Like this quote";
    status.textContent = "No thumbs up yet.";
  }
}

likeButton.addEventListener("click", toggleLike);
status.textContent = `${quote}`;
