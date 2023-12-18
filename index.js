function electrical(){
    document.querySelector("#electrical-box").style.display="block";
    document.querySelector("#arduino-box").style.display="none";
    document.querySelector("#electronic-box").style.display="none";
};

function electronic(){
    ocument.querySelector("#electrical-box").style.display="none";
    document.querySelector("#arduino-box").style.display="none";
    document.querySelector("#electronic-box").style.display="block";
};
function arduino(){
    ocument.querySelector("#electrical-box").style.display="none";
    document.querySelector("#arduino-box").style.display="block";
    document.querySelector("#electronic-box").style.display="none";
};

//MENU ICON
var state=0;
function MENU_ICON(){
    if(state==0){
        document.querySelector('.bar1').style.transform='rotate(45deg)';
        document.querySelector('.bar1').style.margin='9px 0 0 0';
        document.querySelector('.bar3').style.transform='rotate(-45deg)';
        document.querySelector('.bar2').style.margin='-10px 0 0 0';
        document.querySelector('.bar2').style.transform='translate(100%)';
        document.querySelector('.bar2').style.opacity='0';
        document.querySelector('.menu-box').style.transform='translate(0)';
        document.querySelector('.menu-box').style.opacity='1';
        document.querySelector('.list').style.bottom='0';
        state=1;
    }
    else{
        document.querySelector('.bar1').style.transform='rotate(0)';
        document.querySelector('.bar1').style.margin='0 0 3px 0';
        document.querySelector('.bar3').style.transform='rotate(0)';
        document.querySelector('.bar3').style.margin='0 0 3px 0';
        document.querySelector('.bar2').style.margin='0 0 3px 0';
        document.querySelector('.bar2').style.transform='translate(0)';
        document.querySelector('.bar2').style.opacity='1';
        document.querySelector('.menu-box').style.transform='translate(100%)';
        document.querySelector('.menu-box').style.opacity='0';
        document.querySelector('.list').style.bottom='-160px';
        state=0;
    }
}


var mode_state =1;
function MODE(){
    if(mode_state==1){
        document.querySelector('body').style.background='black';
        document.querySelector('body').style.color='white';
        document.querySelector('.arduino').style.background='black';
        document.querySelector('.arduino').style.color='white';
        document.querySelector('.electrical-systems').style.background='black';
        document.querySelector('.electrical-systems').style.color='white';
        document.querySelector('.electronic-systems').style.background='black';
        document.querySelector('.electronic-systems').style.color='white';
        document.querySelector('.powerpoint').style.background='black';
        document.querySelector('.powerpoint').style.color='white';
        document.querySelector('#wrap-services').style.background='rgb(29, 28, 28)';
        mode_state=0;
    }
    else{
        document.querySelector('body').style.background='white';
        document.querySelector('body').style.color='black';
        document.querySelector('.arduino').style.background='white';
        document.querySelector('.arduino').style.color='black';
        document.querySelector('.electrical-systems').style.background='white';
        document.querySelector('.electrical-systems').style.color='black';
        document.querySelector('.electronic-systems').style.background='white';
        document.querySelector('.electronic-systems').style.color='black';
        document.querySelector('.powerpoint').style.background='white';
        document.querySelector('.powerpoint').style.color='black';
        document.querySelector('#wrap-services').style.background='black';
        mode_state=1;
    }
}