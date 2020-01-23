
const playSound = (e) =>{
    //console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
   
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const removetransition = (e) =>{
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


const keys = Array.from(document.querySelector('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);