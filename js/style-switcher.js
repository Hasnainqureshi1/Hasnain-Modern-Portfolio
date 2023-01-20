const style_Switch = document.querySelector(".style_switcher");
const style_switcher_toggle =  document.querySelector(".style_switch_toggler");
const alternateStyle = document.querySelectorAll(".alternate-style");
style_switcher_toggle.addEventListener("click",()=>{
    style_Switch.classList.toggle('open');
    console.log("asd")
 })
//removing the color bar when it's scroll
 window.addEventListener("scroll",()=>{
    
if(style_Switch.classList.contains('open')){
    style_Switch.classList.remove('open');
    console.log("asdasad")
}
 })

 //function for color switcher 

 function setActiveStyle(color){
    localStorage.setItem('color',color);
    changeColor();
 }
 const changeColor=()=>{
alternateStyle.forEach((style)=>{
    console.log("changeColor");
    if(localStorage.getItem('color') === style.getAttribute("title")){
        style.removeAttribute("disabled");
        console.log("sakldfsld");
    }
    else{
        style.setAttribute("disabled","disabled");
    }
})
 }

//  ============== dark and light theme  =======================
// fa-moon
// day-night
const daynight = document.querySelector(".day-night");

window.addEventListener('load',()=>{
    if(document.body.classList.contains('dark')){
        daynight.querySelector('i').classList.add('fa-sun');
    }
    else{
        console.log("sdaklsdasfjksd");
        daynight.querySelector('i').classList.add('fa-moon');
    }
})
daynight.addEventListener("click",()=>{
if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark");
    daynight.querySelector('i').classList.add('fa-moon');
    daynight.querySelector('i').classList.remove('fa-sun');
}
else{
    document.body.classList.add("dark");
    daynight.querySelector('i').classList.add('fa-sun'); 
    daynight.querySelector('i').classList.remove('fa-moon');
}
})