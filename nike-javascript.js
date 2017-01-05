$(document).ready(function(){
    
    var heart = document.getElementById('heart'), 
        heart_change = 1, 
        
        greychoose = document.getElementById("grey-choose"), 
        pinkchoose = document.getElementById("pink-choose"), 
        
        add1 = document.getElementById('add1'),
        add2 = document.getElementById('add2'),
        number = document.getElementById('number-cart'),
        goal = 0;

    function change_heart (){
        if(heart_change == 1){
            heart_change = 0 ;
            $("#heart").attr('src', 'PICTURES/heart-2.png');
        } else{
            heart_change = 1;
            $("#heart").attr('src', 'PICTURES/heart-1.png');
        }
    }
   
    heart.addEventListener('click', change_heart);
    
    function change_choose1 (){
        $("#choosenike").attr('src', 'PICTURES/top-background-2.png');
        
        $("#choose-nike2").attr('src', 'PICTURES/top-background-2.png');
    }
    
    greychoose.addEventListener("click", change_choose1)
    
    function change_choose2 (){
        $("#choosenike").attr('src', 'PICTURES/top-background-1.png');
        
        $("#choose-nike2").attr('src', 'PICTURES/top-background-1.png');
    }
    
    pinkchoose.addEventListener("click", change_choose2)
    
    function addcart () {
        if (goal == 0){
            ++ goal;
            $('#number-cart').html( "(" + goal + ")" ); 
            console.log(goal); 
        }
    }
    
    add1.addEventListener("click", addcart)
    add2.addEventListener("click", addcart)
    
        
});