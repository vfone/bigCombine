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
        nav.offCanvasNav();
        nav.autoToggleNavbar();
        //once createMeny called, scroll() doesn't work on fly
        nav.createMeny();
    });
});
