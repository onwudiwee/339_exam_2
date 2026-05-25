
// Part 3 Question 12
const names = document.querySelectorAll(".addEventListeners");
console.log("Nkwa", names.length, ".addEventListeners"); 



// Part 3 Question 13
document.querySelector("h1").addEventListener("click", function() {
  console.log("Removing the h1")
  this.style.display = "none"
})



// Part 3 Question 14





// Part 3 Question 15
document.querySelector("figure:nth-chi(1)").addEventListener("mouseover", function() {
    console.log("Change first figure caption's text color")
    this.style.visibility = "change"
 })





// Part 3 Question 16




// Part 3 Question 17
.lightboxOverlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: var(--lb-overlay-bg);
  opacity: var(--lb-overlay-opacity);
  display: none;
}

.lightbox {
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 10000;
  text-align: center;
  line-height: 0;
  font-weight: normal;
  outline: none;
}

.lightbox .lb-image {
  display: block;
  height: auto;
  max-width: inherit;
  max-height: none;
  border-radius: var(--lb-border-radius);

  /* Image border */
  border: var(--lb-image-border-width) solid var(--lb-image-border-color);
}

.lightbox a img {
  border: none;
}
