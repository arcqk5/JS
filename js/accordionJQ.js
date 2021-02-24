$(document).ready(function() {
    $('.accordion__item--trigger').click(function() {
        $(this).next('.accordion__item--content').slideToggle(100);
    });
});