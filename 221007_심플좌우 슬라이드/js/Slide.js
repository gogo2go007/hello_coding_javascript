let s_number = 0;

document.querySelector(".left_btn").addEventListener("click",function(){
    if(s_number == 0){
        s_number = 4;
    }
    else{
        s_number = s_number - 1;
    }
    document.querySelector(".view").style.marginLeft = -100 * s_number + "%";
});


document.querySelector(".right_btn").addEventListener("click",function(){
    if(s_number == 4){
        s_number = 0;
    }
    else{
        s_number = s_number + 1;
    }
    document.querySelector(".view").style.marginLeft = -100 * s_number + "%";
});