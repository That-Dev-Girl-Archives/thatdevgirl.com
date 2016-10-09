$(document).ready(function() {

    $('a.scroll').click(function(event) {
        event.preventDefault();
        var location = $(this).attr('href');
        var offset = ($(window).width() > 640) ? 50 : 86;

        $('html, body').animate({
            scrollTop: $(location).offset().top - offset
        }, 1000);
    });

});