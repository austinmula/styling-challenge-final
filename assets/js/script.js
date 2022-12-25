let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let circle = document.getElementsByClassName("circle");
    if (n > slides.length) { slideIndex = 1 }
    console.log(slides[0])
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circle.length; i++) {
        circle[i].className = circle[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    circle[slideIndex - 1].className += " active";
}