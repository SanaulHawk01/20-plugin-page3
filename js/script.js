
// Jquery start

$(document).ready(function(){

	// Swiper

    var swi1 = new Swiper(".mySwi1", {
      effect: "cards",
      grabCursor: true,
    });

    // 2

    var swi = new Swiper(".mySwi", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // owl-carousel
 
	$("#owl-demo").owlCarousel({
	  navigation : true,
      autoPlay: 3000,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
	});

	$("#owl-demo2").owlCarousel({
      items : 10, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

    // star-rating

    // water-ripple

    // vanilla javascript
	klouds.create({
	  selector: '#myClouds'
	});

	// jQuery plugin
	$(function(){
	  $('#myClouds').Klouds();
	});

});
// Jquery end