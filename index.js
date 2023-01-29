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
//CLICKING SERVICES
var serv1 =1;
function service1(){
    if(serv1==1){
        document.querySelector(".general").style.height='0';
        document.querySelector(".general").style.overflow='hidden';
        document.querySelector(".general").style.padding='0';
        document.querySelector(".general").style.border='0';
        document.querySelector(".general").style.height='0';
        document.querySelector(".general").style.overflow='hidden';
        document.querySelector(".general").style.transition=" height 200ms linear";
        serv1=0;
    }
    else{
        document.querySelector(".general").style.height='20px';
        document.querySelector(".general").style.overflow='hidden';
        document.querySelector(".general").style.padding='20px';
        document.querySelector(".general").style.border='1px solid';
        document.querySelector(".general").style.borderTop='0';
        serv1=1;
    }
}

var serv2 =1;
function service2(){
    if(serv2==1){
        document.querySelector(".overhead").style.height='20px';
        document.querySelector(".overhead").style.overflow='hidden';
        document.querySelector(".overhead").style.padding='20px';
        document.querySelector(".overhead").style.border='1px solid';
        document.querySelector(".overhead").style.borderTop='0';
        document.querySelector(".overhead").style.transition=" height 200ms linear";
        serv2=0;
    }
    else{
        document.querySelector(".overhead").style.height='0';
        document.querySelector(".overhead").style.overflow='hidden';
        document.querySelector(".overhead").style.padding='0';
        document.querySelector(".overhead").style.border='0';
        document.querySelector(".overhead").style.height='0';
        document.querySelector(".overhead").style.overflow='hidden';
        document.querySelector(".overhead").style.padding='0';
        serv2=1;
    }
}

var serv3 =1;
function service3(){
    if(serv3==1){
        document.querySelector(".machines").style.height='40px';
        document.querySelector(".machines").style.overflow='hidden';
        document.querySelector(".machines").style.padding='20px';
        document.querySelector(".machines").style.border='1px solid';
        document.querySelector(".machines").style.borderTop='0';
        document.querySelector(".machines").style.transition=" height 200ms linear";
        serv3=0;
    }
    else{
        document.querySelector(".machines").style.height='0';
        document.querySelector(".machines").style.overflow='hidden';
        document.querySelector(".machines").style.padding='0';
        document.querySelector(".machines").style.border='0';
        document.querySelector(".machines").style.height='0';
        document.querySelector(".machines").style.overflow='hidden';
        document.querySelector(".machines").style.padding='0';
        serv3=1;
    }
}

var serv4 =1;
function service4(){
    if(serv4==1){
        document.querySelector(".lights").style.height='20px';
        document.querySelector(".lights").style.overflow='hidden';
        document.querySelector(".lights").style.padding='20px';
        document.querySelector(".lights").style.border='1px solid';
        document.querySelector(".lights").style.borderTop='0';
        document.querySelector(".lights").style.transition=" height 200ms linear";
        serv4=0;
    }
    else{
        document.querySelector(".lights").style.height='0';
        document.querySelector(".lights").style.overflow='hidden';
        document.querySelector(".lights").style.padding='0';
        document.querySelector(".lights").style.border='0';
        document.querySelector(".lights").style.height='0';
        document.querySelector(".lights").style.overflow='hidden';
        document.querySelector(".lights").style.padding='0';
        serv4=1;
    }
}


var serv5 =1;
function service5(){
    if(serv5==1){
        document.querySelector(".elec-systems").style.height='20px';
        document.querySelector(".elec-systems").style.overflow='hidden';
        document.querySelector(".elec-systems").style.padding='20px';
        document.querySelector(".elec-systems").style.border='1px solid';
        document.querySelector(".elec-systems").style.borderTop='0';
        document.querySelector(".elec-systems").style.transition=" height 200ms linear";
        serv5=0;
    }
    else{
        document.querySelector(".elec-systems").style.height='0';
        document.querySelector(".elec-systems").style.overflow='hidden';
        document.querySelector(".elec-systems").style.padding='0';
        document.querySelector(".elec-systems").style.border='0';
        document.querySelector(".elec-systems").style.height='0';
        document.querySelector(".elec-systems").style.overflow='hidden';
        document.querySelector(".elec-systems").style.padding='0';
        serv5=1;
    }
}

var serv6 =1;
function service6(){
    if(serv6==1){
        document.querySelector(".electronic-systems").style.height='20px';
        document.querySelector(".electronic-systems").style.overflow='hidden';
        document.querySelector(".electronic-systems").style.padding='20px';
        document.querySelector(".electronic-systems").style.border='1px solid';
        document.querySelector(".electronic-systems").style.borderTop='0';
        document.querySelector(".electronic-systems").style.transition=" height 200ms linear";
        serv6=0;
    }
    else{
        document.querySelector(".electronic-systems").style.height='0';
        document.querySelector(".electronic-systems").style.overflow='hidden';
        document.querySelector(".electronic-systems").style.padding='0';
        document.querySelector(".electronic-systems").style.border='0';
        document.querySelector(".electronic-systems").style.height='0';
        document.querySelector(".electronic-systems").style.overflow='hidden';
        document.querySelector(".electronic-systems").style.padding='0';
        serv6=1;
    }
}