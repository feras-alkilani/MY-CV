$(function(){
    
    // Nice Scroll
    $('html').niceScroll({
        cursorcolor: '#FF3547',
        cursorwidth: "7px",
        cursorborder: "1px solid #FF3547"
    });

    // Adjust Header Height
    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());
    });

    // Transition Effect For Navbar
    $(window).scroll(function(){
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });

    // Smooth Scrolling
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.about-me').offset().top - 70
        }, 1000);
    });

    // Scrolling Smoothly to Every Section

    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 70
        }, 1000);
    });
    $('.btn-primary').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 70
        }, 1000);
    });

    // Caching Scroll To Top Button
    var scrollButton = $('#scroll-top');
    $(window).scroll(function(){
        $(this).scrollTop() >= 600 ? scrollButton.show(300) : scrollButton.hide(300);
    });

    // Click On The Button To Scroll Top
    scrollButton.click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});

// Loading Spinner Code

$(window).load(function(){
    $('.loading-spinner .sk-cube-grid').fadeOut(1000, function(){
        $('body').css('overflow', 'auto');
        $(this).parent().fadeOut(1000, function(){
            $(this).remove();
        });
    });
});