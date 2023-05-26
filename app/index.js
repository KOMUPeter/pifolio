const toggleButton = document.querySelector(".toggle-Button");
const navLinks = document.querySelector(".navbar-links");
const devIcons = document.querySelector('#devIcons');

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    devIcons.classList.toggle('active')
});

function toggleInfo(element) {
    let info = element.querySelector(".info");
    info.style.display = info.style.display === "block" ? "none" : "block";
  }