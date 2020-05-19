let width = document.body.clientWidth;
let prev = document.getElementsByClassName("prev")[0]
let next = document.getElementsByClassName("next")[0]
let num = 1;
let num2 = 4;
let gal = document.getElementsByClassName("image")[0];
let cicrle = document.getElementsByClassName("cicrle");
let holder = document.getElementById("holder");

next.addEventListener("click",nextImg);
function nextImg(){
    if(width > 700){
            document.querySelector(".image").className += " fade";
            setTimeout(()=>{
                document.querySelector(".image").classList.remove("fade");
            },500);
        if(num < 3){
        num++;
    gal.style.backgroundImage = "url(slike/slika"+num+".jpg)";
    //thumnail pocetak
    let current = document.querySelector(".current");
    if(current.nextElementSibling){
        current.classList.remove("current");
        current.nextElementSibling.classList.add("current");
    }
    else{
        current.classList.remove("current");
        cicrle[0].classList.add("current");
    }
    //thumbnail kraj
    }
    else{
        num = 1;
        gal.style.backgroundImage = "url(slike/slika"+num+".jpg)";
    }
    }
    else if(width<700){
        //strelica next
            document.querySelector(".image").className += " fade";
            setTimeout(()=>{
                document.querySelector(".image").classList.remove("fade");
            },500)
        if(num2 < 6){
            num2++;
    gal.style.backgroundImage = "url(slike/slika"+num2+".jpg)";
    let current = document.querySelector(".current");
    if(current.nextElementSibling){
        current.classList.remove("current");
        current.nextElementSibling.classList.add("current");
    }
    else{
        current.classList.remove("current");
        cicrle[0].classList.add("current");
    }
    }
    else{
        num2=4;
        gal.style.backgroundImage = "url(slike/slika"+num2+".jpg)";
    }
    
    }
    //strelica next kraj
}
prev.addEventListener("click",prevImg);
function prevImg(){
    if(width>700){
        document.querySelector(".image").className += " fade";
            setTimeout(()=>{
                document.querySelector(".image").classList.remove("fade");
            },500)
      if(num > 1){
        num--;
        gal.style.backgroundImage = "url(slike/slika"+num+".jpg)";
        //thumb pocetak
        let current = document.querySelector(".current");
        if(current.previousElementSibling){
            current.classList.remove("current");
        current.previousElementSibling.classList.add("current");
        }else{
            current.classList.remove("current");
            cicrle[cicrle.length-1].classList.add("current");
        }
        //thumb kraj
      }
      else{
          num = 3;
          gal.style.backgroundImage = "url(slike/slika"+num+".jpg)";
      }
    }
    else if(width<700){
        document.querySelector(".image").className += " fade";
            setTimeout(()=>{
                document.querySelector(".image").classList.remove("fade");
            },500)
        if(num2>4){
            num2--;
            gal.style.backgroundImage = "url(slike/slika"+num2+".jpg)";
        }
        else{
            num2=6;
            gal.style.backgroundImage = "url(slike/slika"+num2+".jpg)";
        }
                //thumb pocetak
                let current = document.querySelector(".current");
        if(current.previousElementSibling){
            current.classList.remove("current");
        current.previousElementSibling.classList.add("current");
        }else{
            current.classList.remove("current");
            cicrle[cicrle.length-1].classList.add("current");
        }
        //thumb kraj
    }
    }
setInterval(nextImg,3000);

let line = document.getElementsByClassName("lines")[0];
let lineTwo = document.getElementsByClassName("lines")[1];
let lineThree = document.getElementsByClassName("lines")[2];
    let menu = document.getElementsByClassName("menu")[0];
    let ham = document.getElementsByClassName("ham");
    let open = false;
    for(let i = 0;i<ham.length;i++){
        ham[i].addEventListener("click",menuOpen)
    }
   function menuOpen(){
        if(open===false){
            menu.classList += " in";
            menu.classList.remove("out");
            line.className += " dis";
            line.classList.remove("app");
            lineTwo.className += " rotateOne";
            lineTwo.classList.remove("rotateOneR");
            lineThree.className += " rotateTwo";
            lineThree.classList.remove("rotateTwoR");
            open = true;
        }else{
            menu.classList.toggle("out");
            menu.classList.remove("in");
            line.classList.toggle("app");
            line.classList.remove("dis");
            lineTwo.classList.toggle("rotateOneR");
            lineTwo.classList.remove("rotateOne");
            lineThree.classList.toggle("rotateTwoR");
            lineThree.classList.remove("rotateTwo");
            open = false;
        }
    }

