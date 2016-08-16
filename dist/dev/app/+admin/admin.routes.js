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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vYWRtaW4ucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzQkFBK0IsU0FBUyxDQUFDLENBQUE7QUFDekMsc0JBQTBELHVCQUF1QixDQUFDLENBQUE7QUFDbEYsc0JBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHNCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTlCLG1CQUFXLEdBQWlCO0lBQ3ZDO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsc0JBQWM7UUFDekIsUUFBUSxFQUFFO1lBQ04sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2QkFBcUIsRUFBQztpQkFDekMsMEJBQWtCLEVBQ2xCLGtCQUFVLENBQ2hCO1FBQ0QsV0FBVyxFQUFFLENBQUMsaUJBQVMsQ0FBQztLQUMzQjtDQUNGLENBQUMiLCJmaWxlIjoiYXBwLythZG1pbi9hZG1pbi5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBZG1pbkNvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25zQ29tcG9uZW50LCBBcHBsaWNhdGlvbnNSb3V0ZXMgfSBmcm9tICcuLythcHBsaWNhdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgTmV3c1JvdXRlcyB9IGZyb20gJy4vK25ld3MvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vZ3VhcmQvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgQWRtaW5Sb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICcvYWRtaW4nLFxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICdhZG1pbicsXG4gICAgICBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogQXBwbGljYXRpb25zQ29tcG9uZW50fSxcbiAgICAgICAgICAuLi5BcHBsaWNhdGlvbnNSb3V0ZXMsXG4gICAgICAgICAgLi4uTmV3c1JvdXRlc1xuICAgICAgXSxcbiAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXVxuICB9XG5dO1xuIl19
