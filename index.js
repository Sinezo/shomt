function electrical(){
    document.querySelector("#electrical-box").style.display="block";
    document.querySelector("#arduino-box").style.display="none";
    document.querySelector("#electronic-box").style.display="none";

    document.querySelector(".arduino-btn").style.color="black";
    document.querySelector(".electronic-btn").style.color="black";
    document.querySelector(".electrical-btn").style.color="red";
};

function electronic(){
    document.querySelector("#electrical-box").style.display="none";
    document.querySelector("#arduino-box").style.display="none";
    document.querySelector("#electronic-box").style.display="block";
    document.querySelector(".arduino-btn").style.color="black";
    document.querySelector(".electronic-btn").style.color="grey";
    document.querySelector(".electrical-btn").style.color="black";
};
function arduino(){
    document.querySelector("#electrical-box").style.display="none";
    document.querySelector("#arduino-box").style.display="block";
    document.querySelector("#electronic-box").style.display="none";
    document.querySelector(".arduino-btn").style.color="grey";
    document.querySelector(".electronic-btn").style.color="black";
    document.querySelector(".electrical-btn").style.color="black";
};

//MENU ICON
var state=0;
function MENU_ICON(){
    if(state==0){
        document.querySelector('.bar1').style.transform='rotate(45deg)';
        document.querySelector('.bar1').style.margin='8px 0 0 0';
        document.querySelector('.bar3').style.transform='rotate(-45deg)';
        document.querySelector('.bar2').style.margin='-6px 0 0 0';
        document.querySelector('.wrap-bars').style.border='1px solid';
        document.querySelector('.wrap-bars').style.height='20px';
        document.querySelector('.bar2').style.transform='translate(100%)';
        document.querySelector('.bar2').style.opacity='0';
        document.querySelector('.menu-box').style.transform='translate(0)';
        state=1;
    }
    else{
        document.querySelector('.bar1').style.transform='rotate(0)';
        document.querySelector('.bar1').style.margin='0 0 3px 0';
        document.querySelector('.bar3').style.transform='rotate(0)';
        document.querySelector('.bar3').style.margin='0 0 3px 0';
        document.querySelector('.bar2').style.margin='0 0 3px 0';
        document.querySelector('.wrap-bars').style.border='0';
        document.querySelector('.wrap-bars').style.height='20px';
        document.querySelector('.bar2').style.transform='translate(0)';
        document.querySelector('.bar2').style.opacity='1';
        state=0;
        document.querySelector('.menu-box').style.transform='translate(100%)';
    }
}