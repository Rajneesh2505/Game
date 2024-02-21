let Box=document.querySelector(".box")
let btn=document.querySelector(".start-game")
let input=document.querySelector("input")
Box.style.display="none"
btn.addEventListener("click",()=>{
 if(!input.value){
    alert("please enter a valid turn")
    
 }else{
    inputValue=parseInt(input.value)
Box.style.display="inline-block";
btn.style.display="none";
input.style.display="none"
 }
})
input.setAttribute("value","")
input.addEventListener("change",(e)=>{
  return   input.value=e.target.value
})
let images=document.querySelectorAll(".user img")
let inputValue=undefined
let count=0
let userPoint=0;
let computerPoint=0;
let countLeft=0;
let computerImage=document.querySelector(".computer img")
let playbtn=document.querySelector(".play")
let div=document.querySelector(".user")


let index=null
for(let i in images){
    images[i].onclick=()=>{
        if(!images[i].style.border){
             images[i].classList.toggle("selected-ele")
        }
        index=i
    }
}
playbtn.addEventListener("click",()=>{
    let idx=Math.floor((Math.random()*10)/3)
    if(idx===3){
        idx=idx-1
    }
    computerImage.src=images[idx].src
    if(index>idx){
       ++userPoint
        alert("User Win this round")
       
    }
    else if(index<idx){
        ++computerPoint
        alert("computer Win this round")
       
    }else if(index===idx){
alert("this round is tied")
    }
    count++

    document.querySelector("span.userpoint").textContent=userPoint
document.querySelector("span.comppoint ").textContent=computerPoint
document.querySelector("span.cleft").textContent=inputValue-count

    images[index].classList.toggle("selected-ele")
    if(count===inputValue){
        if(userPoint>computerPoint){
            Box.style.display="none"
            btn.style.display="inline-block"
            input.style.display="inline-block"
            alert("game up and the final winner is user")
        }else if(userPoint<computerPoint){
            Box.style.display="none"
            btn.style.display="inline-block"
            input.style.display="inline-block"
            alert("game up and the final winner is computer")
        }else{
            Box.style.display="none"
            btn.style.display="inline-block"
            input.style.display="inline-block"
            alert("game up and match tied")
        }
    }
})



