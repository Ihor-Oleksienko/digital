
$(document).ready(function() {

    var isFixed = false
    // Открыть мобильное меню
    $('.hamburger-block').click(function(){
        $('.hamburger, .menu').toggleClass('open');
        if ($('.hamburger, .menu').hasClass('open')) {
            $('body').css('overflow-y', 'hidden')
            if (isFixed) {
                $('header').removeClass('fixed')
            }
        } else {
            $('body').css('overflow-y', 'initial')
            if (isFixed) {
                $('header').addClass('fixed')
            }
        }
    });

    $('.links-item a, .poster-start a').click(function(){
        $('.hamburger, .menu').removeClass('open');
        $('body').css('overflow-y', 'initial')
        if (isFixed) {
            $('header').addClass('fixed')
        } else {
            $('header').removeClass('fixed')
        }
    });

    // Слайдер "Услуги"
    $('.start-slider').owlCarousel({
        loop:false,
        nav:true,
        dots: false,
        items: 1,
        smartSpeed:1000
    })

    // Прокрутка к якорю
    $('.poster-btn a[href*="#"]').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
    });

    $('.marguee').marquee({
      duration: 7500,
      gap: 0,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true
    });

    $(window).scroll(function(){
	   if($(this).scrollTop()>10){
	       $('header').addClass('fixed');
           isFixed = true
	   }
	   else if ($(this).scrollTop()<10){
	       $('header').removeClass('fixed');
           isFixed = false
	   }
    });
    
    $('.flow-nav').on('click', '.flow-nav-item:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('div.flow').find('div.flow-info-item').removeClass('active').eq($(this).index()).addClass('active');
	  });
    
    $('.technologies-nav').on('click', '.technologies-nav-item:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('div.technologies').find('div.technologies-list').removeClass('active').eq($(this).index()).addClass('active');
	  });
})