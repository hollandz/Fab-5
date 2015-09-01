// Variables
var trigger     = '.js-trigger';
var menu        = '.js-menu';
var menuFly     = 'site-menu--fly';
var bodyFly     = 'body--fly';
var links       = '.site-menu__list';
var home        = 'li.home';
var hc          = 'li.hc';
var hotel       = 'li.hotel';
var about       = 'li.about';

// Functions
function slideWest() {
    $(menu).toggleClass(menuFly);
    $(document.body).toggleClass(bodyFly);
    $(".navIcon").toggleClass('fi-arrow-right', '300');
    $(".navIcon").toggleClass('fi-arrow-left', '300');
}

function escWest(link) {
    $(menu).removeClass(menuFly);
    $(document.body).removeClass(bodyFly);
    $(".navIcon").toggleClass('fi-arrow-right', '300');
    $(".navIcon").toggleClass('fi-arrow-left', '300');

    $("li").removeClass('active');
    $(link).addClass('active');
}

// Main fly out.
$(trigger).on('click', function() {
    slideWest();
    
});

// Esc Key, hide menu.
$(document).keydown(function(e) {
    if(e.keyCode == 27) {
        escWest();
    }
});

$(".top-bar-section li:not(.contact)").on('click', function(){
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
      
});


$(".site-menu__link.home").on('click', function(){
    escWest(home);
});

$(".site-menu__link.hc").on('click', function(){
    escWest(hc);
});

$(".site-menu__link.hotel").on('click', function(){
    escWest(hotel);
});

$(".site-menu__link.about").on('click', function(){
    escWest(about);
});

$(".site-menu__link.contact").on('click', function(){
    escWest();
});

function activateLink(link){
    $(".top-bar-section li").removeClass('active');
    link.addClass('active');
}