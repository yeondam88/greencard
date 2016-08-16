"use strict";
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app.routes');
var index_1 = require('./guard/index');
var app_component_1 = require('./app.component');
if ('prod' === 'prod') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS,
    index_1.AuthService,
    index_1.AuthGuard,
    {
        provide: common_1.APP_BASE_HREF,
        useValue: '/'
    }
]);
