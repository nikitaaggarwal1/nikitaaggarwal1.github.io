$(document).ready(function() {
    
    $('.js--section-features').waypoint(function(direction) {
            if(direction == "down"){
                $('nav').addClass('sticky');
            } else{
                $('nav').removeClass('sticky');
            }
                                         
    }, {
        offset: '60px;'
    });
    
    /*---scoll on buttons---*/
    $('.js--scroll-to-about-me').click(function () {
        $('html, body').animate({scrollTop: $('.js--about-me').offset().top}, 1000);
    });
    
    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({scrollTop: $('.js--projects').offset().top}, 1000);
    });
    
    $('.js--scroll-to-contacts').click(function () {
        $('html, body').animate({scrollTop: $('.js--contacts').offset().top}, 1000);
    });
    
    /*------mobile nav-----------*/
    
    
    /*---Open and hides the menu on a mobile device and replaces the icon---*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');      
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){ /*---Opening the menu---*/
            icon.addClass('ion-close-round');    /*---Replacing the 3 bar menu icon with the X icon---*/
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round'); /*---Closing the menu---*/
            icon.removeClass('ion-close-round');   /*---Replacing the X icon with the 3 bar menu icon---*/
        }
    });
});
