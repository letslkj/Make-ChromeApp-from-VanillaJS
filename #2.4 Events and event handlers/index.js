const title = document.querySelector("#title");

//function handleResize(){
//    console.log("I have been resized")
//}
//window.addEventListener("resize", handleResize)


//function handleResize(event){
//    console.log(event)
//}
//window.addEventListener("resize", handleResize)

function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick)
