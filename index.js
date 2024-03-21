//MENU
var menu_nav =1;
function MENU(){
    if(menu_nav==1){
        document.querySelector('.menu-box').style.transform='translate(0)';
        menu_nav=0;
    }
    else{
        document.querySelector('.menu-box').style.transform='translate(100%)';
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
            
        },3000);
    
        setTimeout(()=>{
            document.querySelector('.correct-ans1').style.background='green';
            document.querySelector('.correct-ans1').style.color='white';
            document.querySelector('.pointer').style.width='0';
        },3670);
    
        setTimeout(()=>{
            document.querySelector('.wrap-question').style.display='none';
            document.querySelector('.mark').style.width='100%';
        },4000);
        setTimeout(()=>{
            document.querySelector('.short-tick').style.height='20px';
        },4300);
        setTimeout(()=>{
            document.querySelector('.long-tick').style.width='70px';
        },4400);
    }
    else{

    }
    
}