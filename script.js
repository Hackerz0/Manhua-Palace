const button = document.getElementById("header_btn");
const sidebar = document.getElementById("sidebar");

let startX = 0;

button.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  
});

sidebar.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX;
});

sidebar.addEventListener("touchend", function(event) {
    let endX = event.changedTouches[0].clientX;

    if (startX - endX > 100) {
        sidebar.classList.remove("show");
    }
});