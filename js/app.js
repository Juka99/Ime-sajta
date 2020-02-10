$(document).keyup(function(e){
    if(e.keyCode === 27) $('.side').toggleClass('side1');
});

$('.closeSide').on('click',function(){
    $('.side').toggleClass('side1');
});

$('.close1').on('click', function () {
    $('.side').toggleClass('side1');
});

$('.sideCall').on('click', function () {
    $('.side').toggleClass('side1');
});

$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > 50) {
        $('nav').css('background', '#141414');
    }

    else {
        $('nav').css('background', 'transparent');
    }
});