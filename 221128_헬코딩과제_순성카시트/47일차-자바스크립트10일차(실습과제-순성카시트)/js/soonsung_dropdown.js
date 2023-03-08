let gnb = document.querySelector(".gnbwrap");
let depth2 = document.querySelectorAll(".depth2");
let gnbbg = document.querySelector(".gnbbg");

gnb.addEventListener("mouseenter",function(){
    for(let i = 0; i < depth2.length; i++){
        depth2[i].style.display = "block";
    }
    gnbbg.style.display = "block";
});

gnb.addEventListener("mouseleave",function(){
    for(let i = 0; i < depth2.length; i++){
        depth2[i].style.display = "none";
    }
    gnbbg.style.display = "none";
});



