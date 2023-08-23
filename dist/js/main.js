const headerbar = document.querySelector(".header-bar");
const navbarMobile = document.querySelector("#navbar-mobile");
const closeButton = document.querySelector(".close");
const burgerButton = document.querySelector(".burger");



headerbar.addEventListener("click",() =>{
    
    if (burgerButton.style.display == "none"){
        closeButton.style.display ="none";
        burgerButton.style.display = "block";
        navbarMobile.style.transform = "translateX(-90rem)";
    }

    else{
        closeButton.style.display ="block";
        burgerButton.style.display = "none";
        navbarMobile.style.transform = "translateX(0)";
    }
});