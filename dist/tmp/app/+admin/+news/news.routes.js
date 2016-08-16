"use strict";
var index_1 = require('./index');
var index_2 = require('./article/index');
var index_3 = require('./new-article/index');
exports.NewsRoutes = [
    {
        path: 'news',
        component: index_1.NewsComponent
    },
    {
        path: 'news/new',
        component: index_3.NewArticleComponent
    },
    {
        path: 'news/:id',
        component: index_2.ArticleComponent
    }
];
