"use strict";
var index_1 = require('./index');
var index_2 = require('./applicant/index');
exports.ApplicationsRoutes = [
    {
        path: 'applications',
        component: index_1.ApplicationsComponent
    },
    {
        path: 'applications/:id',
        component: index_2.ApplicantComponent
    }
];
