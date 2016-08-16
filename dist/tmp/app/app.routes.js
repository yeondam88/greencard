"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./+home/index');
var index_2 = require('./+apply/index');
var index_3 = require('./+qna/index');
var index_4 = require('./+news/index');
var index_5 = require('./+blogs/index');
var index_6 = require('./+contact/index');
var index_7 = require('./+admin/index');
var index_8 = require('./+keyin/index');
var routes = index_1.HomeRoutes.concat(index_2.ApplyRoutes, index_3.QnaRoutes, index_4.NewsRoutes, index_5.BlogsRoutes, index_6.ContactRoutes, index_7.AdminRoutes, index_8.KeyinRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
];
