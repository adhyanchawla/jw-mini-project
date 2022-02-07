let close =  document.querySelector(".circle");
let slider = document.querySelector(".slider");
let ham = document.querySelector(".ham");
let selfie = document.querySelector(".selfie");
let displayHam = false;

selfie.style.marginLeft = "300px";
if(!displayHam) {
    ham.style.display= "none";
}

close.addEventListener("click", ()=>{
    // slider.style.transition = ease-out;
    slider.style.display = "none";
    ham.style.display= "block";
    selfie.style.marginLeft = "500px";
    displayHam = true;
});

ham.addEventListener("click", () => {
    ham.style.display= "none";
    slider.style.display = "block";
    selfie.style.marginLeft = "300px";
    displayHam = false;
});