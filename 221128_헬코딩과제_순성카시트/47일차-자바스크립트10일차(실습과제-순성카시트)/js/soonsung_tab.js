let btnWrap = document.querySelectorAll(".t_btnWrap li");
let tImg = document.querySelectorAll(".t_img img");

console.log(btnWrap.length);

for(let i = 0; i < btnWrap.length; i++){
    btnWrap[i].addEventListener("click",function(e){
        for(let j = 0; j < btnWrap.length; j++){
            btnWrap[j].querySelector("a").style.background = "#9f9f9f";
            btnWrap[j].style.width = "30px";
            tImg[j].style.display = "none";
        }
        btnWrap[i].querySelector("a").style.background = "#333";
        btnWrap[i].style.width = "45px";
        tImg[i].style.display = "block";
        e.preventDefault();
    });
}