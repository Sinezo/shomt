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
        document.querySelector(".menu").style.height='200px';
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
//IMAGES ON WHO ARE WE
var images_start=1;
var delay=5000;
function Images(){
    if(images_start==1){
        IMAGES.src="elec-installation.jpg";
        images_start=2;
    }
    else if(images_start==2){
        IMAGES.src="elec-design.jpg";
        images_start=3;
    }
    else if(images_start==3){
        IMAGES.src="electronic-design.jpg";
        images_start=1;
    }
    setTimeout('Images()', delay);
}
window.onload=Images;

//SKIP IMAGES
function next(){
    if(images_start==1){
        IMAGES.src="elec-design.jpg";
        images_start=3;
    }
    else if(images_start==2){
        IMAGES.src="electronic-design.jpg";
        images_start=1;
        
    }
    else if(images_start==3){
        IMAGES.src="elec-installation.jpg";
        images_start=2;
    }
}