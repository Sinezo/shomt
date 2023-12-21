//PASSWORD LOCK
var state1=1;
function PASSWORD_LOCK(){
        document.querySelector('.projects-popup').style.transform='translate(0)';
        document.querySelector('#password-lock-popup').style.top='15%';
}

//OBSTACLE AVOIDING PASSWORD LOCK
function OBSTACLE_AVOIDING_PASSWORD_LOCK(){
        document.querySelector('.projects-popup').style.transform='translate(0)';
        document.querySelector('#obstacle-avoiding-password-lock-popup').style.top='15%';
}

//SMART FILLING AND PRICING SYSTEM
function SMART_FILLING_AND_PRICING_SYSTEM(){
    document.querySelector('.projects-popup').style.transform='translate(0)';
    document.querySelector('#smart-filling-and-pricing-system-popup').style.top='15%';
}

function CLOSE(){
    document.querySelector('.projects-popup').style.transform='translate(100%)';
    document.querySelector('#password-lock-popup').style.top='100%';
    document.querySelector('#obstacle-avoiding-password-lock-popup').style.top='100%';
    document.querySelector('#smart-filling-and-pricing-system-popup').style.top='100%';
}