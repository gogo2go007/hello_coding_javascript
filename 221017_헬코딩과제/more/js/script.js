
const btn = document.querySelector(".btn");
const conBox = document.querySelectorAll(".con_contents>li");

let startIndex = 3;


btn.addEventListener("click",function(){
    for(i=startIndex; i<startIndex+3; i++){
        conBox[i].style.display = "block";
    }
    startIndex = startIndex + 3;
    
    if(startIndex>=conBox.length){
        btn.style.display = "none";
    }
});

console.log(conBox);
console.log(btn);