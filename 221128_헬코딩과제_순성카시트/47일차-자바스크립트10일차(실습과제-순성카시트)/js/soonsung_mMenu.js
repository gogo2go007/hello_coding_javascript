const mBtn = document.querySelector(".m_btn");
const mClose = document.querySelector(".m_close");
const mWrap = document.querySelector(".m_wrap");
const depth1 = document.querySelectorAll(".m_gnb > li");

mBtn.addEventListener("click",function(){
    mWrap.classList.add("move")
    document.querySelector(".bodyBg").style.display = "block";
});

mClose.addEventListener("click",function(){
    mWrap.classList.remove("move")
    document.querySelector(".bodyBg").style.display = "none";
});

for(let i = 0; i < depth1.length; i++){
    depth1[i].addEventListener("click",function(){
        if(depth1[i].classList.contains("on")){
            depth1[i].classList.remove("on");
        }
        else{
            const depth1On = document.querySelectorAll(".m_gnb > li.on");
            for(let j = 0; j < depth1On.length; j++){
                depth1On[j].classList.remove("on");
            }
            depth1[i].classList.add("on");
        }
    });
}