$(function(){
    'use strict';
    /* calcul height slider */
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));


    /* Start featured work */

    $('.feautred-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'ALL') {
            $('.row .col-md').css('opacity', 1);
        } else {
            $('.row .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });

/*  end featured work */

});




