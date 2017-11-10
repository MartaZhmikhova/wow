 $(document).ready(function() {

     //modal window
     $('.js-overlay-campaign').fadeIn();
     $('.js-overlay-campaign').addClass('disabled');
     $('.js-close-campaign').click(function() {
         $('.js-overlay-campaign').fadeOut();

     });
     $(document).mouseup(function (e) {
         var popup = $('.js-popup-campaign');
         if (e.target!=popup[0]&&popup.has(e.target).length === 0){
             $('.js-overlay-campaign').fadeOut();

         }
     });
     $(window).on('load', function () {
         setTimeout(function(){
             if($('.js-overlay-campaign').hasClass('disabled')) {
                 return false;
             } else {

                 $(".js-overlay-campaign").fadeIn();
             }
         }, 10000);
     });

 	//scrol
     
     $(".scrol").click(function(event){
         event.preventDefault();
         var id  = $(this).attr('href'),
             top = $(id).offset().top;
         $("html, body").animate({
             scrollTop: top}, 1000);
     });

     //burger
     $(".burger").click(function(){
         $(this).next().slideToggle();
     });

     $('.burger').click(function(){
         $(this).toggleClass('open');
     });


//dropdown
	$(".wrap_lang").hover(function(){
		$(this).find('ul.dropdown_lang>li');
	});
	$('.wrap_lang').hover(function(){
		$(this).toggleClass('active');
	});

//button down
	$(".icon-long-arrow-down").click(function(){
		$("html, body").animate({
			scrollTop: $("#s_about_us").offset().top
		}, 800);
	});
//Carousel
	$("#owl-feedback").owlCarousel({
		items: 1,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        },
		dots: true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed: 1500
	});
//button up
	$(window).scroll(function(){
		if ($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

//message after action form
     $( "#form" ).submit(function( event ) {
         $('.thank-you-message').css('display', 'block');
         this.reset();
         event.preventDefault();
     });
	
});