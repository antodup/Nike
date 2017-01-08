/*============================================================
#title            : Exercise 7: INTEGRATION NIKE
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : DUPRE Anthony
#date             : 12/12/2016
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

$(document).ready(function(){
    
    var heart_change = 1, 
        goal = 0, 
        body = document.getElementsByTagName("body")[0],
        cookie_cart = getCookie("NIKEAIRMAX");
    
    //SEARCH
    function inputsearch (e){
        if (e.keyCode == 13){
            search.value = "";}
    }
    
    $("#search").keypress(inputsearch);
    
    //HEART
    function change_heart (){
        if(heart_change == 1){
            heart_change = 0 ;
            $("#heart").attr('src', 'PICTURES/heart-2.png');
        } else{
            heart_change = 1;
            $("#heart").attr('src', 'PICTURES/heart-1.png');
        }
    }
   
    $("#heart").click(change_heart);
    
    //CHANGE CHOOSE
    function change_choose1 (){
        $("#choosenike").attr('src', 'PICTURES/top-background-2.png');
        
        $("#choose-nike2").attr('src', 'PICTURES/top-background-2.png');
    }
    
    $("#grey-choose").click(change_choose1);
    
    function change_choose2 (){
        $("#choosenike").attr('src', 'PICTURES/top-background-1.png');
        
        $("#choose-nike2").attr('src', 'PICTURES/top-background-1.png');
    }
    
    $("#pink-choose").click(change_choose2);
    
    //ADD CART & REMOVE
    
    if (cookie_cart != null){
            addcart();
            console.log(goal); 
        }
    
    function addcart () {
        if (goal == 0){
            ++goal;
            $('#number-cart').html( "(" + goal + ")" ); 
            
            $('#add1').html( "REMOVE TO CART"); 
            $('#add2').html( "REMOVE TO CART");
            
            setCookie("NIKEAIRMAX",goal,30);
            
        } else {
            --goal; 
            $('#number-cart').html( "(" + goal + ")" );
            
            $('#add1').html( "ADD TO CART"); 
            $('#add2').html( "ADD TO CART");
            
            eraseCookie("NIKEAIRMAX");
            }
    }
    
    $("#add1").click(addcart);
    $("#add2").click(addcart);
      
    //SCROLL
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
    
    //SWIPPER
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30, 
    });
});