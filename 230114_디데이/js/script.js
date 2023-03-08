const timer = document.querySelectorAll(".timer span");
const days0 = document.querySelector(".days span");
const hours0 = document.querySelector(".hours span");
const minutes0 = document.querySelector(".minutes span");
const seconds0 = document.querySelector(".seconds span");

// setInterval(함수,초수);
let countDown = setInterval(function(){

    let today = new Date(); //오늘 날짜
    let dDay = new Date("2023-01-14 18:56:00");

    // 밀리초로 시간 표현
    let todayMs = today.getTime();
    let dDayMs = dDay.getTime();

    // 남은 시간 계산
    let resultDay = dDayMs - todayMs;

    // 초, 분, 시, 일을 표현하는 수식
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes *60;
    const days = hours *24;

    // 남은 일수 계산
    let cdays = Math.floor(resultDay / days);
    // 남은 시간 계산
    let chours = Math.floor((resultDay % days) / hours);
    // 남은 분 계산
    let cminutes = Math.floor((resultDay % hours) / minutes);
    //  남은 초 계산
    let cseconds = Math.floor((resultDay % minutes) / seconds);

    plus0(cdays,days0);
    plus0(chours,hours0);
    plus0(cminutes,minutes0);
    plus0(cseconds,seconds0);

    if(resultDay < 0) {
        clearInterval(countDown);

        timer.forEach(function(item,index){
            item.innerHTML = "00"
        });
    }

    function plus0(time,tags){
        if(time < 10){
            tags.innerHTML = "0" + time;
        }
        else{
            tags.innerHTML = time;
        }
    }

    

    // 일, 시, 분, 초가 한 자리면 옆에 0을 추가
    // if(cdays < 10){
    //     days0.innerHTML = "0" + cdays;
    // }
    // else{
    //     days0.innerHTML = cdays;
    // }
    // // 시간
    // if(chours < 10){
    //     hours0.innerHTML = "0" + chours;
    // }
    // else{
    //     hours0.innerHTML = chours;
    // }
    // // 분
    // if(cminutes < 10){
    //     minutes0.innerHTML = "0" + cminutes;
    // }
    // else{
    //     minutes0.innerHTML = cminutes;
    // }
    // // 초
    // if(cseconds < 10){
    //     seconds0.innerHTML = "0" + cseconds;
    // }
    // else{
    //     seconds0.innerHTML = cseconds;
    // }

    // 남은 시간이 전부 0이 된다면 글씨를 00으로 표시
   

},1000);