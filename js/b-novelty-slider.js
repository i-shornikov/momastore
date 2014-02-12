$(document).ready(function(){
    $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides: 6,
        slideWidth: 320,
        slideMargin: 10,
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false
    });
    $('.b-novelty__content li').hover(
        function() {
            $(this).find('div.add-cart').fadeIn();

        },

        function() {
            $(this).find('div.add-cart').fadeOut();
        }
    );
});
