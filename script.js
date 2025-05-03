const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';  // Move into view
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';  // Move out of view
}


document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm')
    }
    else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm')
    }
})