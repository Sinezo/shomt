//CONTUCT-US
var contact_us_state=1;
function contact_us(){
    if(contact_us_state==1){
        document.querySelector(".contact-us").style.height="100px";
        document.querySelector(".contact-us").style.padding="20px";
        document.querySelector(".drop-down").style.transform="rotate(225deg";
        document.querySelector(".drop-down").style.transition="all 200ms linear";
        document.querySelector(".drop-down").style.color="rgb(230, 151, 33)";

        contact_us_state=0;
    }
    else{
        document.querySelector(".contact-us").style.height="0";
        document.querySelector(".contact-us").style.padding="0";
        document.querySelector(".drop-down").style.transform="rotate(45deg";
        document.querySelector(".drop-down").style.color="rgb(231, 156, 27)";
        contact_us_state=1;
    }
}
//MENU
var menustate=1;
function menu(){
    if(menustate==1){
        document.querySelector(".menu").style.height='150px';
        document.querySelector(".menu").style.opacity='1';
        document.querySelector(".menu-icon").style.marginTop='50px';
        document.querySelector(".bar-one").style.transform='rotate(45deg)';
        document.querySelector(".bar-two").style.display="none";
        document.querySelector(".bar-three").style.transform='rotate(135deg)';

        document.querySelector(".bar-one").style.marginTop='1px';
        document.querySelector(".bar-three").style.marginTop='-4px';
        menustate=0;
    }
    else if(menustate==0){
        document.querySelector(".menu").style.height='0';
        document.querySelector(".menu").style.opacity='-1';
        document.querySelector(".menu-icon").style.marginTop='0';
        document.querySelector(".bar-one").style.transform='rotate(0deg)';
        document.querySelector(".bar-two").style.display="block";
        document.querySelector(".bar-three").style.transform='rotate(0deg)';
        document.querySelector(".bar-one").style.marginTop='-5px';
        document.querySelector(".bar-three").style.marginTop='0';
        menustate=1;
    }
}
//MORE ON SEEDAI
function more_on_seedai(){
    document.querySelector(".more-on-seedai").style.display="none";
}

//SLIDESHOW ANIMATION
var slide_position=1;
function slide_animation(){
    if(slide_position==1){
        document.querySelector('.image1').style.width='0';
        document.querySelector('.image2').style.width='100%';
        document.querySelector('.image2').style.height='300px';

        
        document.querySelector('.pos2').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos1').style.backgroundColor='white';
        document.querySelector('.pos3').style.backgroundColor='white';
        slide_position=2;
    }
    else if(slide_position==2){
        document.querySelector('.image2').style.width='0';
        document.querySelector('.image3').style.width='100%';
        document.querySelector('.image3').style.height='300px';

        document.querySelector('.pos3').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos2').style.backgroundColor='white';
        document.querySelector('.pos1').style.backgroundColor='white';

        
        

        slide_position=3;
    }
    else if(slide_position==3){
        document.querySelector('.image3').style.width='0';
        document.querySelector('.image1').style.width='100%';

        document.querySelector('.pos1').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos2').style.backgroundColor='white';
        document.querySelector('.pos3').style.backgroundColor='white';
        slide_position=1;
    }
    setTimeout('slide_animation()',5000);
}
window.onload=slide_animation;