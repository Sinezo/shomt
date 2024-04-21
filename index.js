//MENU
var menu_nav =1;
function MENU(){
    if(menu_nav==1){
        document.querySelector('.menu-box').style.transform='translate(0)';
        document.querySelector('.bar3').style.transform='translate(100%)';
        document.querySelector('.bar3').style.opacity='0';
        document.querySelector('.bar1').style.transform='rotate(405deg)';
        document.querySelector('.bar1').style.margin='3px 0 0 0';
        document.querySelector('.bar2').style.transform='rotate(-405deg)';
        document.querySelector('.bar2').style.margin='-8px 0 0 0';

        menu_nav=0;
    }
    else{
        document.querySelector('.menu-box').style.transform='translate(100%)';
        document.querySelector('.bar2').style.transform='rotate(0)';
        document.querySelector('.bar2').style.margin='0';
        document.querySelector('.bar1').style.transform='rotate(0)';
        document.querySelector('.bar1').style.margin='0';
        document.querySelector('.bar3').style.transform='translate(0)';
        document.querySelector('.bar3').style.opacity='1';
        menu_nav=1;
    }
}

//ONLOAD
var onload_state =1;
function ONLOAD_ANIMATION(){
    if(onload_state==1){
        setTimeout(()=>{
            document.querySelector('.hand-select').style.margin='-125px 0 0 30px';
            document.querySelector('.hand-select').style.transform='translate(0)';
            
        },100);
    
        setTimeout(()=>{
            document.querySelector('.correct-ans1').style.background='green';
            document.querySelector('.correct-ans1').style.color='white';
            document.querySelector('.pointer').style.width='0';
        },400);
    
        setTimeout(()=>{
            document.querySelector('.wrap-question').style.display='none';
            document.querySelector('.mark').style.width='100%';
        },800);
        setTimeout(()=>{
            document.querySelector('.short-tick').style.height='20px';
        },870);
        setTimeout(()=>{
            document.querySelector('.long-tick').style.width='70px';
        },1000);
    }
    else{

    }
    
}