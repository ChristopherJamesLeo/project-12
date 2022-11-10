console.log("hello world")

let navBar = document.querySelector(".navBar");
console.log(navBar)
window.addEventListener("scroll", e =()=>{
    let navBar = document.querySelector(".navBar");
    navBar.classList.toggle("navbarani" , window.scrollY > 0);
})


// let list = document.querySelectorAll(".nav-right-menu ul li a");
// console.log(list);

// function navActive() {
//     list.forEach((items)=>
//     items.classList.remove("nav-active"));
//     this.classList.add("nav-active");    
// }

// list.forEach((items)=>
// items.addEventListener("click" , navActive))


let btnClassAdd = (btnMainClass , addClass)=>{
    let Btn= document.querySelector(btnMainClass);
    Btn.classList.toggle(addClass);
}

let slideDownBtn= document.querySelector(".nav-slide-btn");
slideDownBtn.addEventListener("click" , e=()=>{
    btnClassAdd(".nav-slide-btn","active")
})
let slideShowSpanBtn = document.querySelector(".slide-tipsandtricks span");
slideShowSpanBtn.addEventListener("click" , e =()=>{
    btnClassAdd(".slide-tipsandtricks span i" , "menu-span-rotate");
})

$(document).ready(e=()=>{
    $(".nav-slide-btn").click(e=()=>{
        $(".nav-slide-menu-container").animate({
            height: "toggle"
        });
    });
    $(".slide-tipsandtricks span").click( e = () =>{
        $(".slide-tipsandtricks ul").animate({
            height: "toggle"
        });
    })
})

let scrollValue=()=>{
    let bodyScrollHeight = document.documentElement.scrollTop;
    // console.log(bodyScrollHeight);
    let thirdSection = document.querySelector(".third-section-right");
    thirdSection.classList.toggle("third-section-right-anni" , window.scrollY > 900)
}
window.onscroll = scrollValue 