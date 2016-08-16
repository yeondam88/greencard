"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var testing_1 = require('@angular/common/testing');
var router_1 = require('@angular/router');
var mock_location_strategy_1 = require('./mock-location-strategy');
exports.provideFakeRouter = function (rootComponentType, config) {
    if (config === void 0) { config = []; }
    return [
        router_1.RouterOutletMap,
        { provide: router_1.UrlSerializer, useClass: router_1.DefaultUrlSerializer },
        { provide: common_1.Location, useClass: testing_1.SpyLocation },
        { provide: common_1.LocationStrategy, useClass: mock_location_strategy_1.MockLocationStrategy },
        {
            provide: router_1.Router,
            useFactory: function (resolver, urlSerializer, outletMap, location, injector) {
                return new router_1.Router(rootComponentType, resolver, urlSerializer, outletMap, location, injector, config);
            },
            deps: [core_1.ComponentResolver, router_1.UrlSerializer, router_1.RouterOutletMap, common_1.Location, core_1.Injector]
        },
        {
            provide: router_1.ActivatedRoute,
            useFactory: function (r) { return r.routerState.root; },
            deps: [router_1.Router]
        },
    ];
};
