//ONSCROLL
/*window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.position='fixed';
    document.getElementById("header").style.width='97%';
    document.getElementById("header").style.zIndex='1';
    document.getElementById("header").style.backgroundColor='rgb(255, 166, 0)';
    document.querySelector('.skip-buttons').style.zIndex='0';
  } else {
    document.getElementById("header").style.position='unset';
    document.getElementById("header").style.backgroundColor='white';
    document.querySelector('.skip-buttons').style.zIndex='1';
  }
}
*/
//MENU ICON ONCLICK
let menu_status='closed';
function MENU(){
    if(menu_status=='closed'){
        document.querySelector('.bar1').style.transform='rotate(45deg)';
        document.querySelector('.bar3').style.transform='rotate(-45deg)';
        document.querySelector('.bar3').style.marginTop='-14px';
        document.querySelector('.bar1').style.marginTop='10px';

        document.querySelector('.mini-bar1').style.transform='translate(-1300%)';
        document.querySelector('.mini-bar2').style.transform='translate(-1300%)';
        document.querySelector('.mini-bar3').style.transform='translate(1300%)';
        document.querySelector('.mini-bar4').style.transform='translate(1300%)';

        document.querySelector('.mini-bar1').style.opacity='0';
        document.querySelector('.mini-bar2').style.opacity='0';
        document.querySelector('.mini-bar3').style.opacity='0';
        document.querySelector('.mini-bar4').style.opacity='0';

        document.querySelector('.menu-popup').style.width='100%';
        document.querySelector('.blinder').style.display='block';
        document.querySelector('.skip-buttons').style.zIndex='0';
        menu_status='open';
    }
    else{
        document.querySelector('.bar1').style.transform='rotate(0)';
        document.querySelector('.bar3').style.transform='rotate(0)';
        document.querySelector('.bar3').style.marginTop='0';
        document.querySelector('.bar1').style.marginTop='0';

        document.querySelector('.mini-bar1').style.transform='translate(0%)';
        document.querySelector('.mini-bar2').style.transform='translate(0%)';
        document.querySelector('.mini-bar3').style.transform='translate(0%)';
        document.querySelector('.mini-bar4').style.transform='translate(0%)';

        document.querySelector('.mini-bar1').style.opacity='unset';
        document.querySelector('.mini-bar2').style.opacity='unset';
        document.querySelector('.mini-bar3').style.opacity='unset';
        document.querySelector('.mini-bar4').style.opacity='unset';

        document.querySelector('.menu-popup').style.width='0';
        document.querySelector('.blinder').style.display='none';
        document.querySelector('.skip-buttons').style.zIndex='1';
        menu_status='closed';
    }
}
//IMAGES SLIDER
var position =1;
function NEXT_IMAGES(){
    if(position!=4){
        const photo = document.querySelector(`div[class="photo${position}"]`);
    photo.style.marginLeft='-100%';
    photo.style.filter='brightness(30%)';
    photo.style.transition='all 200ms ease-in';
    photo.style.overflow='hidden';

    document.querySelector('#next-chevron').style.transform='rotate(360deg)';
    document.querySelector('#next-chevron').style.transition='all 300ms ease-in-out';
    position++;
    if(position==2){
        document.querySelector('.project-title').innerHTML='10A DC Ammeter';
        document.querySelector('#pos2').style.backgroundColor='rgb(158, 182, 235)';
        document.querySelector('#pos1').style.backgroundColor='white';
        document.querySelector('#projects-paragraph').innerHTML='A project that measures up to 10A <b><i>DC</i></b> current.';
        document.querySelector('.mentorship').innerHTML='<s>R300.00</s> <b>R199.99</b>';
    }
    else if(position==3){
        document.querySelector('.project-title').innerHTML='30V DC Voltmeter';
        document.querySelector('#pos3').style.backgroundColor='rgb(158, 182, 235)';
        document.querySelector('#pos2').style.backgroundColor='white';
        document.querySelector('#projects-paragraph').innerHTML='A project that measures up to 30V <b><i>DC</i></b> voltage.';
        document.querySelector('.mentorship').innerHTML='<s>R300.00</s> <b>R199.99</b>';
    }
    else if(position==4){
        document.querySelector('.project-title').innerHTML='Implementation';
        document.querySelector('#pos4').style.backgroundColor='rgb(158, 182, 235)';
        document.querySelector('#pos3').style.backgroundColor='white';
        document.querySelector('#projects-paragraph').innerHTML='Putting together and bringing the idea into reality.';
        document.querySelector('.mentorship').innerHTML='from <s>R200.00</s> <b>R100.00</b>';
    }
    }
    else{
        position=1;
        document.querySelector('.project-title').innerHTML='240V - 3 Phase AC Voltmeter';
        for(let i=1;i<=4;i++){
            const photo = document.querySelector(`div[class="photo${i}"]`);
            photo.style.margin='0';
            photo.style.minWidth='100%';
            photo.style.filter='brightness(100%)';
            document.querySelector(`div[id="pos${i}"]`).style.backgroundColor='white';
        }
        document.querySelector('#pos1').style.backgroundColor='rgb(158, 182, 235)';
    }
}

function BACK_IMAGES(){
    if(position!=1){
    const photo = document.querySelector(`div[class="photo${position-1}"]`);
    photo.style.marginLeft='0';
    photo.style.transition='all 300ms ease-in';
    photo.style.filter='brightness(100%)';
    photo.style.overflow='hidden';
    document.querySelector('#back-chevron').style.transform='rotate(-360deg)';
    document.querySelector('#back-chevron').style.transition='all 300ms ease-in-out';
    position--;
    if(position==1){
        document.querySelector('.project-title').innerHTML='240V - 3 Phase AC Voltmeter';
    }
    else if(position==2){
        document.querySelector('.project-title').innerHTML='10A DC Ammeter';
    }
    else if(position==3){
        document.querySelector('.project-title').innerHTML='30V DC Voltmeter';
    }
    else if(position==4){
        document.querySelector('.project-title').innerHTML='Implementation';
    }
    }
}
