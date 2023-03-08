// 마우스 올리는 대상 선택
const gnbwrap =document.querySelector(".gnbwrap"); //메뉴 및 뒷바탕 배경까지 감싸고 있는 부모

// 해당 1뎁스 안에 있는 2뎁스 li 태그들 갯수 알아내기 위한 세팅
const depth1 = document.querySelectorAll(".gnb > li"); //1뎁스 li 태그들 length값은 5

// 뒷바탕 배경 선택
const gnbBg = document.querySelector(".gnbBg");

// 2뎁스 ul태그들 선택
const depth2 = document.querySelectorAll(".depth2"); //2뎁스 ul 태그 세트들 선택

// 2뎁스 ul태그 안에 있는 li태그 1개의 높이값만 알아내는 작업
let depth2Li = document.querySelector(".depth2 li").offsetHeight;

// 2뎁스 ul태그 안에 있는 li 태그 갯수값만 담아중 변수 세팅
let count = 0;

// li태그 높이값과 2뎁스 안에 있는 li태그 갯수값을 연산해서 최종 높이값 담아줄 변수
let maxHeight = 0;

// 2뎁스 ul태그 안에 li태그 높이값 계산된 거 배열에 차곡차곡 담아놓겠음
let dep2HeightArr =[];

// gnbwrap에 마우스를 올렸을 때 이벤트
gnbwrap.addEventListener("mouseenter",function(){

    // 2뎁스 안에 있는 li태그들하고 li태그 높이값을 곱하기 해서 최종 ul태그 높이값을 계산하자.
    for(let i = 0; i < depth2.length; i++){

        count = depth1[i].querySelectorAll(".depth2 li").length;
        dep2HeightArr[i] = depth2Li * count;

        // 2뎁스의 높이값 0을 스크립트를 통해서 li태그 갯수 * 50px 만큼 늘어나게끔 처리
        depth2[i].style.height = dep2HeightArr[i] + "px";

        //maxHeight 변수 안에 있는 숫자와 배열 안에 들어가 있는 5개의 숫자값과 비교해서 가장 큰 숫자만 골라냄
        if(maxHeight < dep2HeightArr[i]){
            maxHeight = dep2HeightArr[i];
        }
    }
    // 뒷바탕 배경 높이값을 0에서 maxHeight 안에 들어가있는 값으로 변경해준다.
    gnbBg.style.height = maxHeight + "px";
});

// gnbwrap에서 마우스를 내렸을 때 이벤트
gnbwrap.addEventListener("mouseleave",function(){
    // 2뎁스 5개 전부 높이가 0으로 처리
    for(let i = 0; i < depth2.length; i++){
        depth2[i].style.height = "0px";
    }
    gnbBg.style.height = "0px";
});

