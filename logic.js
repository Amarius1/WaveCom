$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    $(".title").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" })
});
