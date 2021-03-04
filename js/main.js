

$(function(){
	
  $('.header__burger').on('click',function() {
  	$('.header__navbar').slideToggle();
    $('.burger').toggleClass('active');
    $('.header__navbar').toggleClass('flex');
  });
 


});