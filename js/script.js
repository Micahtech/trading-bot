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


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(this.getAttribute("data-target")).classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-container");
    const dots = document.querySelectorAll(".dot");
    let index = 0;
    
    function updateSlider() {
        slider.style.transform = `translateX(-${index * 50}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            updateSlider();
        });
    });

    // Auto-slide every 5 seconds
    
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".blog-wrapper");
    const dotsContainer = document.querySelector(".slide-dots");
    const blogCards = document.querySelectorAll(".blog-card");
    let index = 0;
    const totalBlogs = blogCards.length;

    // Determine how many blogs to show based on screen size
    function getSlidesPerView() {
        return window.innerWidth <= 768 ? 1 : 3;
    }

    function updateSlider() {
        const slidesPerView = getSlidesPerView();
        slider.style.transform = `translateX(-${index * (100 / slidesPerView)}%)`;

        document.querySelectorAll(".dott").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function createDots() {
        dotsContainer.innerHTML = "";
        const slidesPerView = getSlidesPerView();
        const dotsCount = Math.ceil(totalBlogs / slidesPerView);

        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dott");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                index = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }
    }

    window.addEventListener("resize", function () {
        createDots();
        updateSlider();
    });

    createDots();
    updateSlider();
});

const scrollContainer = document.querySelector('.blog-wrapper');
const leftArrow = document.querySelector('.scroll-btn.left');
const rightArrow = document.querySelector('.scroll-btn.right');

function scrollLeft() {
    if (!scrollContainer) return;
    try {
        scrollContainer.scrollBy({ left: -50, behavior: 'smooth' });
        updateArrows();
    } catch (error) {
        console.error("Error during scrolling:", error);
    }
}

function scrollRight() {
    if (scrollContainer === null) return;
    scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    updateArrows();
}

// Show/hide arrows based on scroll position
function updateArrows() {
    setTimeout(() => {
        leftArrow.style.display = scrollContainer.scrollLeft > 0 ? "flex" : "none";

        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        rightArrow.style.display = scrollContainer.scrollLeft < maxScrollLeft ? "flex" : "none";
    }, 300);
}

// Check arrow visibility when scrolling
scrollContainer.addEventListener("scroll", updateArrows);

