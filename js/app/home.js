define(function (require) {
    var utli = require('./helper/utli'),
        nav = require('./controller/navController');
        //controller = require('./controller/homeController'),
        //model = require('./model/homeModel');

    //A fabricated API to show interaction of
    //common and specific pieces.
    //controller.setModel(model);

    $(function () {
        //controller.render(lib.getBody());
        //utli.yell("sth");
        nav.offCanvasNav();
        nav.autoToggleNavbar();
        nav.fancyFooterNav();
    });
});
