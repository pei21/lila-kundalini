document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-active");
  });
});

//Change the different images by clicking the arrow bottons
//Using loop to scroll the images
//learn to scroll hero images by using javascript on Youtube.
//Adding variables and  assign "heroImages"
let heroImages = document.querySelectorAll(".heroImages");
let current = 0;

// Adding loop to heroImages
function resetHeroImages() {
  for (let i = 0; i < heroImages.length; i++) {
    heroImages[i].style.display = "none";
    heroImages[i].style.opacity = "1"; // Reset opacity to default value
  }
}
// Define the next to loop, so  images added if arrow-right is clicked
function next() {
  resetHeroImages();
  if (current === heroImages.length - 1) current = -1;
  current++;

  heroImages[current].style.display = "block";
  heroImages[current].style.opacity = "0.5";

  // Follow youtube video to make the images opacity while clicking the arrow-right or arrow-left.
  //Creating a fading effect.
  // " x " value "0.5", it will be the opacity
  //Set up an "Internal", so "setInternal"will be performed 100 milliseconds (0.1 seconds)
  //increase the value"x" by 0.1, it means the opacity will be gradually changed.
  //check if the opacity is reached "1", if true, then clear the interval.
  let x = 0.5;
  let intx = setInterval(function () {
    x += 0.1;
    heroImages[current].style.opacity = x; // Set the opacity of the current image
    if (x >= 1) {
      clearInterval(intx); // Stop the interval once the desired opacity is reached
      x = 0.5; /// Reset the opacity value for future use
    }
  }, 100); //Interval duration: 100 milliseconds (0.1 seconds)
}

// Repeat the same loop to the left side of the arrow-left.
function preview() {
  resetHeroImages();
  if (current === 0) current = heroImages.length;
  current--;

  heroImages[current].style.display = "block";
  heroImages[current].style.opacity = "0.5";

  let intx = setInterval(function () {
    x += 0.1;
    heroImages[current].style.opacity = x;
    if (x >= 1) {
      clearInterval(intx);
      x = 0.5;
    }
  }, 100);
}
function start() {
  resetHeroImages();
  heroImages[current].style.display = "block";
}

start();
