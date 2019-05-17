
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 120) {
        $(".title").addClass("blur");
    } else {
        $(".title").removeClass("blur");
    }
});
new Tooltip(referenceElement, {
    placement: 'top', // or bottom, left, right, and variations
    title: "Top"
});
