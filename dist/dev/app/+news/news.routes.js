"use strict";
var index_1 = require('./index');
var index_2 = require('./article/index');
exports.NewsRoutes = [
    {
        path: 'news',
        component: index_1.NewsComponent
    },
    {
        path: 'news/:id',
        component: index_2.ArticleComponent
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rbmV3cy9uZXdzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0JBQThCLFNBQVMsQ0FBQyxDQUFBO0FBQ3hDLHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXRDLGtCQUFVLEdBQWlCO0lBQ3RDO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUscUJBQWE7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFNBQVMsRUFBRSx3QkFBZ0I7S0FDNUI7Q0FDRixDQUFDIiwiZmlsZSI6ImFwcC8rbmV3cy9uZXdzLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEFydGljbGVDb21wb25lbnQgfSBmcm9tICcuL2FydGljbGUvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgTmV3c1JvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICB7XG4gICAgcGF0aDogJ25ld3MnLFxuICAgIGNvbXBvbmVudDogTmV3c0NvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ25ld3MvOmlkJyxcbiAgICBjb21wb25lbnQ6IEFydGljbGVDb21wb25lbnRcbiAgfVxuXTtcbiJdfQ==
