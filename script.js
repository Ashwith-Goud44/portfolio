window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "#0077ff";
    } else {
        nav.style.background = "#222";
    }
});