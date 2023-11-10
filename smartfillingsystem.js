var position=1;
var points =0;
var a=0;
function CONTINUE(){
    if(position==1){
        document.querySelector('#intro-theory').style.display='none';
        document.querySelector('#intro-questions').style.display='block';
        position=2;
        document.querySelector('.mypoints1').innerHTML=points; 
    }
    else if(position==2){
        if(document.querySelector('#dc-pump').checked){
            document.querySelector('.feedback').innerHTML='Correct Answer';
            document.querySelector('.feedback').style.color='green';
            for(let i=0;i<3;i++){
                setTimeout(function(){
                    points=i;
                    document.querySelector('.mypoints1').innerHTML=points;
                    if(i==2){
                        setTimeout(function(){
                            document.querySelector('#intro-questions').style.display='none';
                            document.querySelector('#second-theory').style.display='block';
                            position=3;
                            document.querySelector('.feedback').innerHTML='';
                        },2000);
                    }
                },i*100);
            }
            
        }
        else{
            if(document.querySelector('#ac-pump').checked || document.querySelector('#induction-motor').checked || document.querySelector('#stepper-motor').checked){
                document.querySelector('.feedback').innerHTML='Wrong Answer';
                document.querySelector('.feedback').style.color='red';
                /*setTimeout(function(){
                            document.querySelector('#intro-questions').style.display='none';
                            document.querySelector('#second-theory').style.display='block';
                            position=3;
                            document.querySelector('.feedback').innerHTML='';
                        },2000);*/
            }
            else{
                document.querySelector('.feedback').innerHTML='Please Select';
                document.querySelector('.feedback').style.color='chocolate';
            }
        }
        
    }
    else if(position==3){
        document.querySelector('.mypoints2').innerHTML=points;
        document.querySelector('#second-theory').style.display='none';
        document.querySelector('#second-theory-questions').style.display='block';
        position=4;
    }
    else if(position==4){
        if(document.querySelector('#C-400ml').checked){
            document.querySelector('.feedback').innerHTML='Correct Answer';
            document.querySelector('.feedback').style.color='green';
            for(let i=2;i<6;i++){
                setTimeout(function(){
                    points=i;
                    document.querySelector('.mypoints2').innerHTML=points;
                    if(i==4){
                        setTimeout(function(){
                            document.querySelector('#second-theory-questions').style.display='none';
                            document.querySelector('#third-theory').style.display='block';
                            document.querySelector('.feedback').innerHTML='';
                            position=5;
                        },2000);
                    }
                },i*100);
            }
            
        }
        else{
            if(document.querySelector('#A-1200ml').checked || document.querySelector('#B-300ml').checked || document.querySelector('#D-1L').checked){
                document.querySelector('.feedback').innerHTML='Wrong Answer';
                document.querySelector('.feedback').style.color='red';
                /*setTimeout(function(){
                            document.querySelector('#intro-questions').style.display='none';
                            document.querySelector('#second-theory').style.display='none';
                            position=3;
                        },2000);*/
            }
            else{
                document.querySelector('.feedback').innerHTML='Please Select';
                document.querySelector('.feedback').style.color='chocolate';
            }
        }
        
    }
    else if(position==5){
        document.querySelector('.mypoints3').innerHTML=points;
        document.querySelector('#third-theory').style.display='none';
        document.querySelector('#third-theory-questions').style.display='block';
        position=6;
    }
    else if(position==6){
        if(document.querySelector('#C-36seconds').checked){
            document.querySelector('.feedback').innerHTML='Correct Answer';
            document.querySelector('.feedback').style.color='green';
            for(let i=5;i<9;i++){
                setTimeout(function(){
                    points=i;
                    document.querySelector('.mypoints3').innerHTML=points;
                    if(i==8){
                        setTimeout(function(){
                            document.querySelector('#third-theory-questions').style.display='none';
                            //document.querySelector('#fourth-theory').style.display='block';
                            document.querySelector('.feedback').innerHTML='';
                            position=5;
                        },2000);
                    }
                },i*100);
            }
            
        }
        else{
            if(document.querySelector('#A-notverylong').checked || document.querySelector('#B-10seconds').checked || document.querySelector('#D-37seconds').checked){
                document.querySelector('.feedback').innerHTML='Wrong Answer';
                document.querySelector('.feedback').style.color='red';
                /*setTimeout(function(){
                            document.querySelector('#intro-questions').style.display='none';
                            document.querySelector('#second-theory').style.display='none';
                            position=3;
                        },2000);*/
            }
            else{
                document.querySelector('.feedback').innerHTML='Please Select';
                document.querySelector('.feedback').style.color='chocolate';
            }
        }
        
    }
}