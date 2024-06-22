const hamburger =document.querySelector(".hamburger");
const navmenu =document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toogle("active");
    navmenu.classList.toogle("active");
})

document.querySelector(".nav-link").foreach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("activate");
    navmenu.classList.remove("activate");

}))