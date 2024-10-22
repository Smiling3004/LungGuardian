// JavaScript to dynamically load header and footer
window.addEventListener("DOMContentLoaded", (event) => {
  fetch("../header.html") // One directory up from Asthma/ or LungCancer/
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
});
window.addEventListener("DOMContentLoaded", (event) => {
  fetch("../footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
window.addEventListener("DOMContentLoaded", (event) => {
  fetch("../diseases&conditions.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("diseases&conditions-placeholder").innerHTML =
        data;
    });
});
window.addEventListener("DOMContentLoaded", (event) => {
  fetch("../blog.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("blog-placeholder").innerHTML = data;
    });
});
window.addEventListener("DOMContentLoaded", (event) => {
  fetch("../appointment.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("appointment-placeholder").innerHTML = data;
    });
});
