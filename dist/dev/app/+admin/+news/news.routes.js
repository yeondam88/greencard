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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vK25ld3MvbmV3cy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHNCQUE4QixTQUFTLENBQUMsQ0FBQTtBQUN4QyxzQkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRCxzQkFBb0MscUJBQXFCLENBQUMsQ0FBQTtBQUU3QyxrQkFBVSxHQUFpQjtJQUN0QztRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLHFCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsMkJBQW1CO0tBQy9CO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsd0JBQWdCO0tBQzVCO0NBQ0YsQ0FBQyIsImZpbGUiOiJhcHAvK2FkbWluLytuZXdzL25ld3Mucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmV3c0NvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQXJ0aWNsZUNvbXBvbmVudCB9IGZyb20gJy4vYXJ0aWNsZS9pbmRleCc7XG5pbXBvcnQgeyBOZXdBcnRpY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9uZXctYXJ0aWNsZS9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBOZXdzUm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHtcbiAgICBwYXRoOiAnbmV3cycsXG4gICAgY29tcG9uZW50OiBOZXdzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnbmV3cy9uZXcnLFxuICAgIGNvbXBvbmVudDogTmV3QXJ0aWNsZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ25ld3MvOmlkJyxcbiAgICBjb21wb25lbnQ6IEFydGljbGVDb21wb25lbnRcbiAgfVxuXTtcbiJdfQ==
