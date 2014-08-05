/*!
 name: navController
 feature: trigger offCanvas nav, show/hide navbars when page scrolling donw/up
 client: Tg31
 author: Vito Tang
 requires: jquery
 */
define(['jquery'], function($) {
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
                    right: "85%"
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
                    }, 200, function() {});

                    $('.navbar-fixed-bottom').stop().animate({
                        opacity: "0"
                    }, 200, function() {});
                    currentpotion = $(this).scrollTop();
                }
                //page scroll up or page reaches top or bottom
                if ((currentpotion - $(this).scrollTop() > dist) || $(this).scrollTop() == 0 || $(this).scrollTop() >= ($("#canvas").height() -  window.innerHeight) )
                {
                    $('.navbar-fixed-top').stop().animate({
                        opacity: "1"
                    }, 200, function() {});
                    $('.navbar-fixed-bottom').stop().animate({
                        opacity: "1"
                    }, 200, function() {});
                    currentpotion = $(this).scrollTop();
                }
            })
        },
        fancyFooterNav: function(){
            //TODO: fancy footer nav
        }
    }
});
