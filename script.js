/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        links.classList.toggle("open");
    });
}


/* ==========================================
   CONTACT MODAL
========================================== */

const modal = document.querySelector(".modal");

document.querySelectorAll("[data-open-modal]").forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("open");
    });
});

document.querySelectorAll("[data-close-modal]").forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.remove("open");
    });
});

if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("open");
        }
    });
}


/* ==========================================
   DEMO CONTACT FORM
========================================== */

function submitDemo(event) {

    event.preventDefault();

    const toast = document.querySelector(".toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3600);

    event.target.reset();

    if (modal) {
        modal.classList.remove("open");
    }

}

document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", submitDemo);
});


/* ==========================================
   HERO IMAGE SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let sliderInterval;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
}

function previousSlide() {

    let previous = currentSlide - 1;

    if (previous < 0) {
        previous = slides.length - 1;
    }

    showSlide(previous);
}


/* Arrow Buttons */

const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");

if (nextButton) {
    nextButton.addEventListener("click", () => {
        nextSlide();
        restartSlider();
    });
}

if (previousButton) {
    previousButton.addEventListener("click", () => {
        previousSlide();
        restartSlider();
    });
}


/* Navigation Dots */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);
        restartSlider();

    });

});


/* Auto Play */

function startSlider() {

    sliderInterval = setInterval(() => {

        nextSlide();

    }, 5000);

}

function restartSlider() {

    clearInterval(sliderInterval);
    startSlider();

}


/* Initialize */

if (slides.length > 0) {
    showSlide(0);
    startSlider();
}

/*==========================
 HERO SLIDER
==========================*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));
    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

function nextSlide(){

    let next = currentSlide + 1;

    if(next >= slides.length){
        next = 0;
    }

    showSlide(next);

}

function previousSlide(){

    let prev = currentSlide - 1;

    if(prev < 0){
        prev = slides.length-1;
    }

    showSlide(prev);

}

document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = previousSlide;

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

    });

});

setInterval(nextSlide,5000);
