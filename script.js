console.log(document.getElementById("header_btn"));

const button = document.getElementById("header_btn");
const sidebar = document.getElementById("sidebar");

button.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});