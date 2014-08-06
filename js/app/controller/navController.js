/*!
 name: navController
 feature: trigger offCanvas nav, show/hide navbars when page scrolling donw/up
 client: Tg31
 author: Vito Tang
 requires: jquery
 */



define(['jquery', 'meny'], function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
    return {
        offCanvasNav: function(){
            $('[data-toggle=offcanvas]').clickToggle(
                function() {
                $('.row-offcanvas-right').animate({
                    right: "55%"
                }, 200, function() {
                    $('.row-offcanvas-right').addClass('active');
                    $('.sidebar-offcanvas').addClass('show');
                });

                $('.row-offcanvas-right .sidebar-offcanvas').animate({
                    right: "0%"
                }, 200, function() {

                });
            },
                function(){
                    $('.row-offcanvas-right').animate({
                        right: "0"
                    }, 200, function() {
                        $('.row-offcanvas-right').removeClass('active');
                        $('.sidebar-offcanvas').removeClass('show');
                    });
                    $('.row-offcanvas-right .sidebar-offcanvas').animate({
                        right: "0%"
                    }, 200, function() {

                    });
                }
            );
        },
        autoToggleNavbar: function(){
            //TODO:show or hide navbar while scroll page up or down
            var currentpotion = 0;
            var dist = 50;

            //TODO: class name into global setting
            //TODO: don't fade footer nav
            $(window).scroll(function () {
                //scrolldown movement bigger than 50px and sidebar NOT activated
                if($(this).scrollTop() - currentpotion > dist && !$(".sidebar-offcanvas").hasClass('show')) //scrolldown
                {
                    $('.navbar-fixed-top').stop().animate({
                        opacity: "0"
                    }, 100, function() {});

                    $('.navbar-fixed-bottom').stop().animate({
                        opacity: "0"
                    }, 100, function() {});
                    currentpotion = $(this).scrollTop();
                }
                //page scroll up or page reaches top or bottom
                if ((currentpotion - $(this).scrollTop() > dist) || $(this).scrollTop() == 0 || $(this).scrollTop() >= ($("#canvas").height() -  window.innerHeight) )
                {
                    $('.navbar-fixed-top').stop().animate({
                        opacity: "1"
                    }, 100, function() {});
                    $('.navbar-fixed-bottom').stop().animate({
                        opacity: "1"
                    }, 100, function() {});
                    currentpotion = $(this).scrollTop();
                }
            })
        },
        createMeny: function(){
            //TODO: fancy footer nav
            var meny = Meny.create({
                // The element that will be animated in from off screen
                menuElement: document.querySelector( '.meny' ),

                // The contents that gets pushed aside while Meny is active
                contentsElement: document.querySelector( '.wrapper' ),

                // [optional] The alignment of the menu (top/right/bottom/left)
                position: Meny.getQuery().p || 'left',

                // [optional] The height of the menu (when using top/bottom position)
                height: $("#canvas").height(),

                // [optional] The width of the menu (when using left/right position)
                //width: 260,

                // [optional] Distance from mouse (in pixels) when menu should open
                threshold: 20,

                // [optional] Use mouse movement to automatically open/close
                mouse: true,

                // [optional] Use touch swipe events to open/close
                touch: true
            });


        }
    }
});
