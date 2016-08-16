"use strict";
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app.routes');
var index_1 = require('./guard/index');
var app_component_1 = require('./app.component');
if ('dev' === 'prod') {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxzQkFBcUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUN0RSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHlDQUEwQixtQ0FBbUMsQ0FBQyxDQUFBO0FBRTlELDJCQUFxQyxjQUFjLENBQUMsQ0FBQTtBQUNwRCxzQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQyxxQkFBYyxFQUFFLENBQUM7QUFBQyxDQUFDO0FBTWxELG9DQUFTLENBQUMsNEJBQVksRUFBRTtJQUN0Qiw4QkFBc0IsRUFBRTtJQUN4QixvQkFBWSxFQUFFO0lBQ2QscUJBQWM7SUFDZCxpQ0FBb0I7SUFDcEIsbUJBQVc7SUFDWCxpQkFBUztJQUNUO1FBQ0UsT0FBTyxFQUFFLHNCQUFhO1FBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7S0FDNUI7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoiYXBwL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGRpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3JtcyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBUFBfUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQXV0aEd1YXJkIH0gZnJvbSAnLi9ndWFyZC9pbmRleCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5pZiAoJzwlPSBFTlYgJT4nID09PSAncHJvZCcpIHsgZW5hYmxlUHJvZE1vZGUoKTsgfVxuXG4vKipcbiAqIEJvb3RzdHJhcHMgdGhlIGFwcGxpY2F0aW9uIGFuZCBtYWtlcyB0aGUgUk9VVEVSX1BST1ZJREVSUyBhbmQgdGhlIEFQUF9CQVNFX0hSRUYgYXZhaWxhYmxlIHRvIGl0LlxuICogQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvYXBpL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9pbmRleC9ib290c3RyYXAtZnVuY3Rpb24uaHRtbFxuICovXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gIGRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSxcbiAgcHJvdmlkZUZvcm1zKCksXG4gIEhUVFBfUFJPVklERVJTLFxuICBBUFBfUk9VVEVSX1BST1ZJREVSUyxcbiAgQXV0aFNlcnZpY2UsXG4gIEF1dGhHdWFyZCxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gIH1cbl0pO1xuXG4vLyBJbiBvcmRlciB0byBzdGFydCB0aGUgU2VydmljZSBXb3JrZXIgbG9jYXRlZCBhdCBcIi4vd29ya2VyLmpzXCJcbi8vIHVuY29tbWVudCB0aGlzIGxpbmUuIE1vcmUgYWJvdXQgU2VydmljZSBXb3JrZXJzIGhlcmVcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlX1dvcmtlcl9BUEkvVXNpbmdfU2VydmljZV9Xb3JrZXJzXG4vL1xuLy8gaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuL3dvcmtlci5qcycpLnRoZW4oKHJlZ2lzdHJhdGlvbjogYW55KSA9PlxuLy8gICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKSlcbi8vICAgICAuY2F0Y2goKGVycjogYW55KSA9PlxuLy8gICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKSk7XG4vLyB9XG4iXX0=
