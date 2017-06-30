function playSound(event){
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    //if don't have fit key or audio than return
    if(!key||!audio) return;

    //after press key than change class
    key.classList.add("drumkit-button--press");
    //whien press key the audio time will reset to 0
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(event){
    event.target.classList.remove("drumkit-button--press");
}


window.addEventListener('keydown',playSound);

var keys = document.querySelectorAll(".drumkit-button");
keys.forEach(key=>{
    key.addEventListener("transitionend",removeTransition);
});