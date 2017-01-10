$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".nav-hidden").css("padding-left") == "1px" ){
        $("#navbar-collapse").hide();
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $("#navbar-collapse").show();
        if ($(".navbar").offset().top <= 50) {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }
}

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".nav-hidden").css("padding-left") == "1px" ) {
    } else {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        if ($(".nav-hidden").css("padding-left") == "1px" ){
            $("#navbar-collapse").hide();
        }
    });
});

$(function() {
    $('button.navbar-toggle').bind('click', function(event) {
        $("#navbar-collapse").toggle();
    });
});
