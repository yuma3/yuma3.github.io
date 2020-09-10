'use strict;'

$(function () {

    // modal

    // open
    $('#work1').click(function () {
        $('#work1-modal').fadeIn();
    });
    // close
    $('.close-modal').click(function () {
        $('#work1-modal').fadeOut();
    });

    // menu-btn
    $("#toggle").click(function () {
        $(this).toggleClass("activate");
        if ($(this).hasClass("activate")) {
            $(".small-nav").fadeIn(200);
        } else {
            $(".small-nav").fadeOut(200);
        }
        return false;
    })

    // page top

    $('.totop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
           $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });

    $('.totop').click(function() {
        $('html, body').animate({
            'scrollTop': 0
        },1200,'easeInOutExpo')
    })

})
