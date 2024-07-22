$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});



 $('.customer-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.customer-slider-nav'
});
$('.customer-slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.customer-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [         
     { breakpoint: 767, settings: { arrows: !1, dots: !0, slidesToShow: 1, slidesToScroll: 1 } },
    ],

});
		

 // $(".slick_slider_nav").slick({
 //        slidesToShow: 3,
 //        slidesToScroll: 1,
 //        asNavFor: ".projects-slide",
 //        dots: !1,
 //        centerMode: !1,
 //        focusOnSelect: !0,
 //        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
 //        nextArrow: '<button class="slide-arrow next-arrow"></button>',
 //        responsive: [
 //            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
 //            { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
 //            { breakpoint: 767, settings: { arrows: !1, dots: !0, slidesToShow: 2, slidesToScroll: 1 } },
 //            { breakpoint: 540, settings: { arrows: !1, dots: !0, slidesToShow: 1, slidesToScroll: 1 } },
 //        ],
 //    }),
 //    $(".projects-slide").slick({ 
 //    	dots: !1, 
 //    	infinite: !0, 
 //    	slidesToShow: 1, 
 //    	slidesToScroll: 1, 
 //    	autoplay: !0, 
 //    	arrows: !1, 
 //    	fade: !0, 
 //    	infinite: !0, 
 //    	touchThreshold: 100, 
 //    	asNavFor: ".slick_slider_nav" });