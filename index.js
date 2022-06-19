for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       makeSound(this.innerHTML);
       pressAnimations(this.innerHTML);
    });

}


document.addEventListener("keydown",function (enter){
    makeSound(enter.key);
    pressAnimations(enter.key);
 });

function makeSound(drume){
    switch(drume){
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;  
        default:
            alert("please enter correct letter!")                  
       }

}


function pressAnimations(key){
    var animationButton = document.querySelector("."+key);
    animationButton.classList.add("pressed");
    setTimeout(function(){
        animationButton.classList.remove("pressed");
    },100);
}