 $(document).ready(function(){
  
  $(window).scroll(function (){ 
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 100){
      $('.fix').css("background-color","white");
         
        
    
    }

 });
      });