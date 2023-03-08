const slide = document.querySelector(".slide");
const view = document.querySelector(".view");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const pager = document.querySelectorAll(".bot_menu li");

let sNumber = 0;

//자동 슬라이드
let autoSlide = setInterval(function(){
    nextSlideCondition();
},5000);

// 마우스 올리면 자동슬라이드 멈춤
slide.addEventListener("mouseenter",function(){
    clearInterval(autoSlide);
});

// 마우스 내리면 자동슬라이드 다시 시작
slide.addEventListener("mouseleave",function(){
    autoSlide = setInterval(function(){
        nextSlideCondition();
    },5000);
});

//이후버튼
nextBtn.addEventListener("click",function(){
    nextSlideCondition();
});

// 이전버튼
prevBtn.addEventListener("click",function(){
    prevSlideCondition();
});

// 하단 납작 버튼
for(let j = 0; j < pager.length; j++){
    pager[j].addEventListener("click",function(){
        sNumber = j;
        slideMove();        
    });
}


// 중복 정리
function btnDisableChange(){
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    setTimeout(function(){
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    },3000);
}

function slideMove(){
    for(let i=0; i < pager.length; i++){
        pager[i].classList.remove("on");
    }
    pager[sNumber].classList.add("on");
    view.style.marginLeft = -100 * sNumber + "%";
}

function nextSlideCondition(){
    if(sNumber == pager.length-1){
        sNumber = 0;
    }
    else{
        sNumber++;
    }
    btnDisableChange();
    slideMove();
}

function prevSlideCondition(){
    if(sNumber == 0){
        sNumber = pager.length-1; 
    }
    else {
        sNumber--;
    }
    btnDisableChange();
    slideMove();
}