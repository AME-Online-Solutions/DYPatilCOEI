AOS.init();
$(document).ready(function () {
    'use strict';

    console.log("Javascript Functions is working properly from Start..");
    $('.header-top .navbar-brand .d,.header-top .navbar-brand .im, .header-top .navbar-brand img').css('display', 'none');

    $('.navbar .navbar-toggler').click(function () {
        $('#navbarNav .nav-fill .nav-item').css('text-align','left');
    });
    
//    function scrolltop() {
//        if ($(this).scrollTop() > 180) {
//            if (!$(".header-top").hasClass("fixed-top")) {
//                $(".header-top").addClass("fixed-top");
//            }
//        } else {
//            if ($(".header-top").hasClass("fixed-top")) {
//                $(".header-top").removeClass("fixed-top");
//            }
//        }
//    };
    function scrolltop() {
        if ($(this).scrollTop() > 180) {
            if (!$("#header-menubar").hasClass("fixed-top")) {
                $("#header-menubar").addClass("fixed-top");
            }
        } else {
            if ($("#header-menubar").hasClass("fixed-top")) {
                $("#header-menubar").removeClass("fixed-top");
            }
        }
    };


    //Banner Padding
    $(window).load(function () {
        $('.educationCount span').css('opacity', '0');
    });

    //call function on load and page resize
    $(window).scroll(scrolltop);
    $(window).resize(scrolltop);


    //Introduction Number Animation
    $(window).scroll(function () {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        $('.educationCount').each(function () {
            var bottom_of_object = $('.facts').offset().top + $('.facts').outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $('.educationCount span').css('opacity', '1');
                $('.lines-1 span').animateNumber({number: 31, numberStep: comma_separator_number_step}, 2000);
                $('.lines-2 span').animateNumber({number: 4, numberStep: comma_separator_number_step}, 2000);
                $('.lines-3 span').animateNumber({number: 200000, numberStep: comma_separator_number_step}, 2000);
                $('.lines-4 span').animateNumber({number: 500000, numberStep: comma_separator_number_step}, 2000);
                $('.lines-5 span').animateNumber({number: 200, numberStep: comma_separator_number_step}, 2000);
                $('.lines-6 span').animateNumber({number: 1000, numberStep: comma_separator_number_step}, 2000);
                $('.facts span').addClass('animated fadeIn');
            }
        });
    });


    

//    New version Navbar
    /*$(window).scroll(function () {
     var sticky = $('.st'),
     scroll = $(window).scrollTop(),
     divWidth = $(window).width();
     if (scroll >= 70) {
     sticky.addClass('sticky-topbar');
     $('.topLogo img').css('display', 'inline-block');
     if (window.innerWidth > 768) {
     $('.topLogo span').css('display', 'inline-block');
     }
     } else {
     sticky.removeClass('sticky-topbar');
     $('.topLogo img, .topLogo span').css('display', 'none');
     }       
     });*/

    console.log("Javascript Functions is working properly from End..");
});


//        if (window.innerWidth < 768) {
//            // Extra Small Device
//            $('.topLogo span').css('display', 'none');
//        } else if (window.innerWidth < 991) {
//            $('.topLogo span').css('display', 'inline-block');                
//        } else if (window.innerWidth < 1199) {
//            // Medium Device
//            $('.topLogo span').css('display', 'inline-block');
//        } else {
//            // Large Device
//            $('.topLogo span').css('display', 'inline-block');
//        }