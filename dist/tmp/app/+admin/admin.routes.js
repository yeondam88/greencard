"use strict";
var index_1 = require('./index');
var index_2 = require('./+applications/index');
var index_3 = require('./+news/index');
var index_4 = require('../guard/index');
exports.AdminRoutes = [
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: index_1.AdminComponent,
        children: [
            { path: '', component: index_2.ApplicationsComponent }
        ].concat(index_2.ApplicationsRoutes, index_3.NewsRoutes),
        canActivate: [index_4.AuthGuard]
    }
];
