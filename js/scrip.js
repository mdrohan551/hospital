$(function(){

    var  scil = $('.main_menu').offset().top;
     alert(scil);

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > scil){
        $('.main_menu').addClass('.manu_fix');
      }
     
    else{
      $('.main_menu').removeClass('.manu_fix')
    }
    
    
    });

















});