
// 메뉴 영역
const gnb = document.querySelector(".gnb");
const hdMenu = document.querySelector(".hd_menu");

gnb.addEventListener("mouseenter",function(){
    hdMenu.classList.add("on");
});

gnb.addEventListener("mouseleave",function(){
    hdMenu.classList.remove("on");
});

// 슬라이드 영역
const pager = document.querySelectorAll(".pager li");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const panel =  document.querySelector(".panel");
const toggle = document.querySelector(".toggle_btn");
let sNumber = 0;
let toggleValu = "";

next.addEventListener("click",function(){
    common();
});

prev.addEventListener("click",function(){
    if(sNumber == 0){
        sNumber = pager.length-1;
    }
    else{
        sNumber--;
    }

    next.disable = true;
    prev.disable = true;

    setTimeout(function(){
        next.disable = false;
        prev.disable = false;
    },3000);

    for(let i = 0; i < pager.length; i++){
        pager[i].classList.remove("on");
        pager[sNumber].classList.add("on");
    }
    panel.style.marginLeft = -100 * sNumber + "%";
});


// 토글버튼
toggle.addEventListener("click",function(){
    
    toggleValu = toggle.value;
    
    if(toggleValu == "stop"){
        clearInterval(autoSlide);
        toggle.value = "play";
        toggle.innerHTML = "재생";
    }
    else{
        let autoSlide = setInterval(function(){
            common();
        },5000)

        toggle.value = "stop";
        toggle.innerHTML = "멈춤";
    }
});


// 동그라미버튼
for(let i = 0; i < pager.length; i++){
    pager[i].addEventListener("click",function(){
        for(let j = 0; j < pager.length; j++){
            pager[j].classList.remove("on");
        }
        pager[i].classList.add("on");

        sNumber = i;

        panel.style.marginLeft = -100 * sNumber + "%"; 
    });
}

// 자동슬라이드
let autoSlide = setInterval(function(){
                common();
            },5000);


// 슬라이드 영역 함수 선언
function common(){
    if(sNumber == pager.length-1){
        sNumber = 0;
    }
    else{
        sNumber++
    }

    next.disable = true;
    prev.disable = true;

    setTimeout(function(){
        next.disable = false;
        prev.disable = false;
    },3000);

    for(let i = 0; i < pager.length; i++){
       pager[i].classList.remove("on");
       pager[sNumber].classList.add("on");
    }
    panel.style.marginLeft = -100 * sNumber + "%";
};



// 탭메뉴 영역
const tabBtn = document.querySelectorAll(".tab_btn li");
const tabContents = document.querySelectorAll(".tab_contents li");

for(let i = 0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener("click",function(){
        for(let j = 0; j < tabBtn.length; j++){
            tabBtn[j].classList.remove("on");
            tabContents[j].style.display = "none";
        }
        tabBtn[i].classList.add("on");
        tabContents[i].style.display = "block";
    });
}

