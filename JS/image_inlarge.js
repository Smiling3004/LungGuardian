// Get modal elements
const modal = document.getElementById("imageModal");
const enlargedImage = document.getElementById("enlargedImage");
const captionText = document.getElementById("imageCaption");
const closeBtn = document.getElementById("closeBtn");

// Add event listener to all images with class "normal-image"
document.querySelectorAll(".normal-image").forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "flex"; // Show modal
    enlargedImage.src = this.src; // Set image source
    captionText.textContent = this.getAttribute("data-caption"); // Set caption text
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Hide modal
});

// Close the modal when clicking outside of the image
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide modal
  }
});
