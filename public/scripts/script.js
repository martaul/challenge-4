
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        loop:true,
        margin:50,
        nav:false,
        autoPlay: 1000,
        dots: false,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
    
    // Custom Button
    $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
      owl.trigger('prev.owl.carousel');
    });
    
  });

