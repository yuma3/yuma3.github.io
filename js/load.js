// 'use strict;'

// var smallWindow = 780;
// var normalWindow = 1000;


// $(function () {

    //load

    // var windowWidth = document.documentElement.clientWidth;
    // var area_header = $('#header');
    // var area_main = $('#main');
    // var area_footer = $('#footer');

    // $(window).load(function () {
    //     $('.content-wrapper').addClass('fadein');
    // })

//     if (windowWidth <= smallWindow) {
//         setTimeout(function () {
//             area_header.addClass('fadein');
//         }, 900);
//         setTimeout(function () {
//             area_main.addClass('fadein');
//         }, 1200);
//         setTimeout(function () {
//             area_footer.addClass('fadein');
//         }, 1500);

//         $(window).scroll(function () {
//             if ($(this).scrollTop() > area_footer.offset().top - 400) {
//                 area_footer.addClass('fadein');
//             };
//         });

//     } else {
//         setTimeout(function () {
//             $(".header-nav-pc li.gnav02").addClass('fadein');
//         }, 800);
//         setTimeout(function () {
//             $(".header-nav-pc li.gnav03").addClass('fadein');
//         }, 900);
//         setTimeout(function () {
//             $(".header-nav-pc li.gnav04").addClass('fadein');
//         }, 1000);
//         setTimeout(function () {
//             $(".header-nav-pc li.gnav05").addClass('fadein');
//         }, 1100);
//         setTimeout(function () {
//             $(".header-nav-pc li.gnav06").addClass('fadein');
//         }, 1200);

//         setTimeout(function () {
//             sec01.addClass('fadein');
//         }, 400);
//         setTimeout(function () {
//             sec02.addClass('fadein');
//         }, 1200);

//         $(window).scroll(function () {
//             if ($(this).scrollTop() > sec05.offset().top - 700) {
//                 sec05.addClass('fadein');
//             };
//             if ($(this).scrollTop() > sec06.offset().top - 700) {
//                 sec06.addClass('fadein');
//                 sec07.addClass('fadein');
//                 sec08.addClass('fadein');
//             };
//             if ($(this).scrollTop() > sec09.offset().top - 700) {
//                 sec10.addClass('fadein');
//             };
//             if ($(this).scrollTop() > sec11.offset().top - 700) {
//                 sec12.addClass('fadein');
//             };
//         });

//     }
//windowサイズ取得
// var windowWidth = document.documentElement.clientWidth;
// if (windowWidth <= spWindow) {
    //SP

    //main-slide
//     $('.main-slide').bxSlider({
//         mode: 'fade',
//         auto: true,
//         speed: 700,
//         pause: 6300,
//         pager: false,
//         controls: false,
//         touchEnabled: true,
//     });

// } else if (windowWidth <= tbWindow) {
    //Tablet

    //main-slide
//     $('.main-slide').bxSlider({
//         mode: 'fade',
//         auto: true,
//         speed: 1200,
//         pause: 6000,
//         pager: false,
//         controls: false,
//         touchEnabled: true,
//     });

// } else {
    //PC

    //main-slide
//     $('.main-slide').bxSlider({
//         mode: 'fade',
//         auto: true,
//         speed: 2000,
//         pause: 6000,
//         pager: false,
//         controls: true,
//         touchEnabled: false,
//         nextSelector: "#feed-next-btn",
//         prevSelector: "#feed-prev-btn",
//     });

// }

//blog-sec-slide
// $('.blog-sec-slide').slick({
//     centerMode: true,
//     centerPadding: '21%',
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     arrows: true,
//     prevArrow: '<img src="/wp/wp-content/themes/kenshi_matsumoto/common/images/arrow02-left_pc.svg" class="blog-prev-arrow">',
//     nextArrow: '<img src="/wp/wp-content/themes/kenshi_matsumoto/common/images/arrow02-right_pc.svg" class="blog-next-arrow">',
//     responsive: [
//         {
//             breakpoint: 799,
//             settings: {
//                 centerPadding: '15%',
//                 arrows: false,
//             }
//         },
//         {
//             breakpoint: 599,
//             settings: {
//                 centerPadding: '50px',
//                 arrows: false,
//             }
//         },
//     ]
// });



// })








// $(function () {

//     var loadingImg = $(".loading-img");

//     loadingImg.fadeOut(400, contFadeIn);

//     function contFadeIn() {
//         $("#contents-wrap").addClass('fade-in');
//     }

// });
