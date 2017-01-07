/*============================================================
#title            : Exercise 7: INTGRATION NIKE
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : DUPRE Anthony
#date             : 12/12/2016
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

$(document).ready(function(){
    
    var heart = document.getElementById('heart'), 
        heart_change = 1, 
        
        greychoose = document.getElementById("grey-choose"), 
        pinkchoose = document.getElementById("pink-choose"), 
        
        add1 = document.getElementById('add1'),
        add2 = document.getElementById('add2'),
        number = document.getElementById('number-cart'),
        goal = 0, 
        
        body = document.getElementsByTagName("body")[0],
        
        search = document.getElementById('search');

    function inputsearch (e){
        if (e.keyCode == 13){
            search.value = "";
       }
    }
    
    addEventListener('keydown', inputsearch);
    
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
            ++goal;
            $('#number-cart').html( "(" + goal + ")" ); 
            
            $('#add1').html( "REMOVE TO CART"); 
            $('#add2').html( "REMOVE TO CART"); 
        } else {
            --goal; 
            $('#number-cart').html( "(" + goal + ")" );
            $('#add1').html( "ADD TO CART"); 
            $('#add2').html( "ADD TO CART");
        }
    }
    
    add1.addEventListener("click", addcart)
    add2.addEventListener("click", addcart)

    window.onscroll = function(){
       if (document.body.scrollTop >= 0 && document.body.scrollTop < 730){
            $('#article2').css({
                position : "absolute", 
                top : "118px", 
                right : "30px"
            });
       } else if (document.body.scrollTop >= 730 && document.body.scrollTop <= 1400){
           $('#article2').css({
                position : "fixed", 
                top : "118px", 
                right : "80px"
            }); 
       } else if (document.body.scrollTop > 1400){
           $('#article2').css({
                position : "absolute", 
                top : "780px", 
                right : "30px"
            });
       }
    }
    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30, 
    });
});