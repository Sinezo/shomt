//MENU
var menustate=1;
function menu(){
    if(menustate==1){
        document.querySelector(".menu").style.height='fit-content';
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
        document.querySelector('.image2').style.width='300px';
        document.querySelector('.image2').style.height='300px';

        document.querySelector('.pos1').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos2').style.backgroundColor='white';
        document.querySelector('.pos3').style.backgroundColor='white';
        slide_position=2;
    }
    else if(slide_position==2){
        document.querySelector('.image2').style.width='0';
        document.querySelector('.image3').style.width='300px';
        document.querySelector('.image3').style.height='300px';

        document.querySelector('.pos2').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos1').style.backgroundColor='white';
        document.querySelector('.pos3').style.backgroundColor='white';

        slide_position=3;
    }
    else if(slide_position==3){
        document.querySelector('.image3').style.width='0';
        document.querySelector('.image1').style.width='300px';

        document.querySelector('.pos3').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos2').style.backgroundColor='white';
        document.querySelector('.pos1').style.backgroundColor='white';
        slide_position=1;
    }
    setTimeout('slide_animation()',5000);
}
window.onload=slide_animation;
//SLIDE ANIMATION POSITION
function position1(){
    slide_position=1;
    document.querySelector('.image1').style.width='0';
    document.querySelector('.image3').style.width='0';
        document.querySelector('.image2').style.width='300px';
        document.querySelector('.image2').style.height='300px';

        document.querySelector('.pos1').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos2').style.backgroundColor='white';
        document.querySelector('.pos3').style.backgroundColor='white';
}
function position2(){
    slide_position=2;
    document.querySelector('.image2').style.width='0';
    document.querySelector('.image1').style.width='0';
        document.querySelector('.image3').style.width='300px';
        document.querySelector('.image3').style.height='300px';

        document.querySelector('.pos2').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos1').style.backgroundColor='white';
        document.querySelector('.pos3').style.backgroundColor='white';
}
function position3(){
    slide_position=3;
    document.querySelector('.image3').style.width='0';
    document.querySelector('.image2').style.width='0';
        document.querySelector('.image1').style.width='300px';

        document.querySelector('.pos3').style.backgroundColor='rgb(63, 63, 66)';
        document.querySelector('.pos2').style.backgroundColor='white';
        document.querySelector('.pos1').style.backgroundColor='white';
}