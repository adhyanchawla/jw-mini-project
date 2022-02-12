let close =  document.querySelector(".circle");
let slider = document.querySelector(".slider");
let ham = document.querySelector(".ham");
let selfie = document.querySelector(".selfie");
let displayHam = false;
var mq768 = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
var mq1024 = window.matchMedia("(min-width: 1024px) and (max-width: 1443px)");
var mq1440 = window.matchMedia("(max-width: 1440px)");


if(window.innerWidth <= 768) {
    selfie.style.marginLeft = "100px";
} else if(window.innerWidth > 768 && window.innerWidth <= 1024) {
    selfie.style.marginLeft = "200px";    
} else if(window.innerWidth > 1024 && window.innerWidth <= 1440) {
    selfie.style.marginLeft = "100px";
}
else selfie.style.marginLeft = "300px";


if(!displayHam) {
    ham.style.display= "none";
}

//on clicking close button
close.addEventListener("click", ()=>{
    // slider.style.transition = ease-out;
    slider.style.display = "none";
    ham.style.display= "block";
    if(window.innerWidth <= 768) {
        selfie.style.marginLeft = "220px"
    }
    else if(window.innerWidth > 768 && window.innerWidth <= 1024) {
        selfie.style.marginLeft = "280px";
    } else if(window.innerWidth > 1024 && window.innerWidth <= 1440) {
        selfie.style.marginLeft = "380px";
    } else {
        selfie.style.marginLeft ="500px";
    }
    displayHam = true;
});

//on clicking the hamburger
ham.addEventListener("click", () => {
    ham.style.display= "none";
    slider.style.display = "block";
    if(window.innerWidth <= 768) {
        selfie.style.marginLeft = "45px";
    } else if(window.innerWidth > 768 && window.innerWidth <= 1024) {
        selfie.style.marginLeft = "200px";    
    } else if(window.innerWidth > 1024 && window.innerWidth <= 1440) {
        selfie.style.marginLeft = "100px";
    }
    else selfie.style.marginLeft = "300px";
    displayHam = false;
});