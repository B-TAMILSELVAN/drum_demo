for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i] /*it is like an array*/ .addEventListener("click", function handleClick() {
    let buttonInnerHtml = this.innerHTML;
    switch (buttonInnerHtml) {
      case "w":
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case 'a':
        let tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play();
        break;
        case 'd':
          let tom3= new Audio("sounds/tom-3.mp3")
          tom3.play();
          break;
          case 'j':
            let tom4 = new Audio("sounds/crash.mp3")
            tom4.play();
            break;
            case 'k':
              let crash = new Audio("sounds/kick-bass.mp3")
              crash.play();
              break;
              case 's':
                let kickBass= new Audio("sounds/tom-4.mp3")
                kickBass.play();
                break;
                case 'l':
                  let snare = new Audio("sounds/snare.mp3")
                  snare.play();
                  break;
                  default:
                  console.log(buttonInnerHTML);

    }
    buttonAnimation(buttonInnerHtml);
  });
}
document.addEventListener("keydown",function(event){
  switch (event.key) {
    case 'w':
      let audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      let tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;
      case 'd':
        let tom3= new Audio("sounds/tom-3.mp3")
        tom3.play();
        break;
        case 'j':
          let tom4 = new Audio("sounds/crash.mp3")
          tom4.play();
          break;
          case 'k':
            let crash = new Audio("sounds/kick-bass.mp3")
            crash.play();
            break;
            case 's':
              let kickBass= new Audio("sounds/tom-4.mp3")
              kickBass.play();
              break;
              case 'l':
                let snare = new Audio("sounds/snare.mp3")
                snare.play();
                break;
                default:
                console.log(buttonInnerHTML);

  }
  buttonAnimation(event.key);
});



function buttonAnimation(currentKey){
  let activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
