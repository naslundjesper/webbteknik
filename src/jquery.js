$(document).ready(function () {
    // När användaren scrollar
    $(window).on('scroll', function () {
        $('.fade-in').each(function () {
            var elementOffset = $(this).offset().top;
            var windowHeight = $(window).scrollTop() + $(window).height();

            if (windowHeight > elementOffset) {
                $(this).addClass('visible'); // Lägg till "visible" när elementet är synligt
            }
        });
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) { // Visas efter 300px scroll
            $("#scrollToTop").fadeIn(300); // 300ms fade-in-effekt
        } else {
            $("#scrollToTop").fadeOut(300); // 300ms fade-out-effekt
        }
    });

    $("#scrollToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800); // Långsam scrollning tillbaka till toppen (800ms)
    });
});