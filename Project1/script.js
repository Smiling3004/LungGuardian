let isAuthenticated = false;
window.onload = function () {
  if (isAuthenticated) {
    document.getElementById("user-email").textContent = "useremail@example.com"; // Replace with actual email
    document.getElementById("profile-pic").src = "images/signed-in-profile.jpg"; // Replace with user profile image
  } else {
    profileDropdown.style.display = "none";
    document.getElementById("user-email").textContent = "";
  }
};

// Hamburger menu toggle for mobile
// Toggle Menu for Mobile
function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");
}

// Handle Logout
document.getElementById("logout").addEventListener("click", function () {
  isAuthenticated = false;
  alert("You have been logged out.");
  window.location.reload();
});

// Profile logic and other functionalities...

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and the modal image element
var image = document.getElementById("imageToEnlarge");
var modalImg = document.getElementById("enlargedImage");

// Get the close button
var closeBtn = document.getElementById("closeBtn");

// When the user clicks on the image, open the modal and show the enlarged image
image.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src; // Set the image source in the modal
};

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  const uploadForm = document.getElementById("uploadForm");
  const xrayImageInput = document.getElementById("xrayImage");
  const imagePreviewSection = document.getElementById("imagePreview");
  const previewImage = document.getElementById("previewImage");
  const resultSection = document.getElementById("result");
  const resultText = document.getElementById("resultText");

  // Function to display the uploaded image preview
  xrayImageInput.addEventListener("change", function () {
    const file = xrayImageInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        previewImage.src = e.target.result;
        imagePreviewSection.classList.remove("hidden");
      };

      reader.readAsDataURL(file);
    }
  });

  // Handle the form submission for prediction
  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    const file = xrayImageInput.files[0];

    if (!file) {
      alert("Please upload a chest X-ray image!");
      return;
    }

    // Simulate a prediction process
    resultSection.classList.remove("hidden");
    resultText.textContent = "Processing prediction...";

    // Simulating a delay for the prediction process
    setTimeout(() => {
      // Simulate prediction result (replace this with actual prediction logic)
      const prediction =
        Math.random() > 0.5
          ? "Lung Disease Detected"
          : "No Lung Disease Detected";

      // Display the prediction result
      resultText.textContent = prediction;
    }, 3000); // Simulate a 3-second delay for the "prediction"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  const items = document.querySelectorAll(".blog-item");
  let currentIndex = 0;

  // Calculate how many items are visible based on the screen width
  const calculateVisibleItems = () => {
    const containerWidth = document.querySelector(
      ".carousel-container"
    ).offsetWidth;
    const itemWidth = items[0].offsetWidth + 20; // Add 20px for margins
    return Math.floor(containerWidth / itemWidth); // Number of visible items
  };

  // Move the carousel based on the current index
  const moveCarousel = () => {
    const itemWidth = items[0].offsetWidth + 20; // Add margin width
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  };

  nextButton.addEventListener("click", () => {
    const visibleItems = calculateVisibleItems();
    currentIndex++;
    if (currentIndex >= items.length - visibleItems + 1) {
      currentIndex = 0; // Reset to the first item
    }
    moveCarousel();
  });

  prevButton.addEventListener("click", () => {
    const visibleItems = calculateVisibleItems();
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - visibleItems; // Move to the last set of items
    }
    moveCarousel();
  });

  // Adjust the carousel when the window is resized
  window.addEventListener("resize", () => {
    moveCarousel(); // Recalculate the position based on new screen size
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   // Check if the URL has a hash
//   if (window.location.hash) {
//     const targetId = window.location.hash.substring(1); // Get the ID without the #
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }
// });
