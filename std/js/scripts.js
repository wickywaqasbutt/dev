$(function() {

    $('.faq-answer').slideUp(); // for content 

    $(".faq-title").on("click", function() { // for title 

        var x = $(this).next();

        $('.faq-answer').not(x).slideUp();

        $(this).next().slideToggle(200);

    });

});
/*
    Smooth scroll functionality for anchor links (animates the scroll
    rather than a sudden jump in the page)
*/
$(".smooth-anchor").click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
        var scrollTo = target.offset().top;
        $('body, html').animate({
            scrollTop: scrollTo - 100 + 'px'
        }, 800);
    }
});


/* 

    Menu open/close function

                               */

$('.site-header__menu-icon').click(function() {
    $('.nav-wrapper').toggleClass('nav-wrapper--open');
});


/*

 Header sticky fucntion

                           */

// var header = document.getElementById("site-header");
// var sticky = header.offsetTop;

// function stickerHeader() {

//     if (window.pageYOffset > sticky) {
//         header.classList.add("site-header--sticky");
//     } else {
//         header.classList.remove("site-header--sticky");
//     }
// }

// window.onscroll = function() {
//     stickerHeader()
// };