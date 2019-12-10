$(document).ready(function() {
    $('body').css('padding-top', $('header').height());
});

$(window).resize(function(){
    $('body').css('padding-top', $('header').height());
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $('header').addClass('bg-shap');
    }
    if (scroll < 5) {
        $('header').removeClass('bg-shap');
    }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  items: 1,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  mouseDrag: true
});

 

$(".range-slider").each(function() {
    $(".range-slider__value").each(function() {
        var value = $(".range-slider__range").attr("value");
        $(".range-slider__value").html(value);
    });

    $(".range-slider__range").on("input", function() {
        $(".range-slider__value").html(this.value);
    });
});



$(document).on("click",".m-lines",function() {
	$(this).toggleClass('open');

    if ($(this).hasClass("open")) {
        $(".menu-wrap").addClass('open');
    }else{
        $(".menu-wrap").removeClass('open');
    }
}); 


 
$('.faq_list li .title').on('click', function(e) {
    $('.faq_list li .title').not(this).parent().removeClass('open');
    $(this).parent().toggleClass('open');

 
    e.stopPropagation(); 
});