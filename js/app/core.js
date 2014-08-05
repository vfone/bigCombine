//Load common code that includes config, then load the app logic for home page.
require(['./config'], function (config) {
    require(['../lib/jquery.min']);
    require(['../lib/angular.min']);
    require(['../lib/bootstrap.min']);
    require(['../lib/retina.min']);

    require(['app/home']);
});