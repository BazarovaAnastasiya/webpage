

$(function(){
	
  $('.header__burger').on('click',function() {
    $('.burger').toggleClass('active');

    $('.header__navbar').slideToggle(200, "linear",function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
      if($(this).css('display') === "block"){
      $(this).css('display', 'flex');
      }
      });

  });

});

// const bth = document.querySelector('.header__burger')
// const navbar = document.querySelector('.header__navbar')
// console.log(bth);

// bth.onclick = function(){
//   navbar.classList.toggle("active")
// }