// Skroll-page
$(document).ready(function() {
    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };
});

/* плавное перемещение по id */
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1000, 'swing', function () {
 window.location.hash = target;
 });
 });
  

$(document).ready(function() {
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 0);
        return false;
    });
});

// аккардеон
$(document).ready(function() {
    $('.accordeon__trigger').on('click', function(b) {
        b.preventDefault();

        var $this = $(this),
            item = $this.closest('.accordeon__item'),
            list = $this.closest('.accordeon__list'),
            items = list.find('.accordeon__item'),
            content = item.find('.accordeon__inner'),
            otherContent = list.find('.accordeon__inner'),
            duration = 300;

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');

            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
        } else {
            content.stop(true, true).slideUp(duration);
            item.stop(true, true).removeClass('active');
        }
    });
});