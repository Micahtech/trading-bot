// Change Header on Scroll
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero Image Slider
const images = [
    "url('../images/close-up-keyboard-used-by-software-engineer-programming-home.jpg')",
    "url('https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150038835.jpg?t=st=1743536306~exp=1743539906~hmac=79c669a6acd890e7e00224bd107b80d948261420949b8b19b8a2d764b9075692&w=996')",
    "url('../images/person-working-html-computer.jpg')"
];

let currentIndex = 0;
const heroSection = document.querySelector('.hero');

function changeHeroImage() {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.backgroundImage = images[currentIndex];
}

setInterval(changeHeroImage, 3000);

// Initial Hero Image
heroSection.style.backgroundImage = images[0];


document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const menuIcon = document.getElementById("menu-icon");
    const nav = document.querySelector("nav");

    const menuSVG = "../icons/material-symbols-light--menu (3).svg";  // Path to menu icon
    const closeSVG = "../icons/material-symbols-light--close-rounded.svg"; // Path to close icon

    menu.addEventListener("click", function () {
        const isMenuOpen = nav.classList.toggle("active");

        // Switch menu icon source
        menuIcon.src = isMenuOpen ? closeSVG : menuSVG;
    });
});

function startCounter(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let counters = document.querySelectorAll(".counter");
            counters.forEach(counter => {
                let target = +counter.getAttribute("data-target");
                let count = 0;
                let increment = target / 100;

                let updateCount = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target; // Ensure it stops exactly at the target
                    }
                };
                updateCount();
            });

            observer.unobserve(entry.target); // Stop observing after animation runs once
        }
    });
}

let observer = new IntersectionObserver(startCounter, {
    threshold: 0.5
});

observer.observe(document.querySelector(".stats-container"));
