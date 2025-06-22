

// Select the menu icon and nav links
const menuicon = document.querySelector(".menu-icon"); // or ".menu-icon" if you changed it to class
const navlinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a"); // Select all nav links

// Toggle menu on icon click
menuicon.onclick = () => {
    navlinks.classList.toggle("active");
};

// Close menu when a link is clicked
navItems.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
    });
});
