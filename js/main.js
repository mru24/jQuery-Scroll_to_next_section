$(document).ready(function () {
    $('.next.scroller').on('click', function () {

        var fuller = $(this).closest('.fullscreen').next(),
            section = $(this).closest('.section');

        section.animate({
            scrollTop: $(section).scrollTop() + fuller.offset().top + 0
        }, 700);
    });
    $('.prev.scroller').on('click', function () {

        var fuller = $(this).closest('.fullscreen').prev(),
            section = $(this).closest('.section');
            
        section.animate({
            scrollTop: $(section).scrollTop() + fuller.offset().top + 0
        }, 700);
    });
});
