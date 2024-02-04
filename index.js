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