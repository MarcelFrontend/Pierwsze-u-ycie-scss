console.clear();

const menu = document.querySelector(".menuList"),
    menuBtn = document.querySelector(".menuBtn"),
    closeBtn = document.querySelector(".closeBtn");

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("open");
});

closeBtn.addEventListener("click", ()=>{
    menu.classList.toggle("open");
});