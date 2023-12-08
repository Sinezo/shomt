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
        document.querySelector('.wrap-bars').style.height='20px';
        document.querySelector('.bar2').style.transform='translate(100%)';
        document.querySelector('.bar2').style.opacity='0';
        document.querySelector('.left-side-bar').style.transform='translate(0)';
        document.querySelector('.left-side-bar').style.zIndex='1';
        document.querySelector('.left-side-bar').style.opacity='1';
        document.querySelector('.left-side-bar').style.position='fixed';
        document.querySelector('.left-side-bar').style.width='100%';
        document.querySelector('.left-side-bar').style.top='0';
        document.querySelector('.left-side-bar').style.height='100%';
        
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
        document.querySelector('.left-side-bar').style.transform='translate(-100%)';
        document.querySelector('.left-side-bar').style.opacity='0';
        state=0;
    }
}