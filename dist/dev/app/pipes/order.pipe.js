"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OrderPipe = (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (value, field, reverse) {
        if (value) {
            if (!reverse) {
                return value.sort(function (a, b) {
                    if (a[field] > b[field]) {
                        return 1;
                    }
                    if (a[field] < b[field]) {
                        return -1;
                    }
                    return 0;
                });
            }
            else {
                return value.sort(function (a, b) {
                    if (a[field] > b[field]) {
                        return -1;
                    }
                    if (a[field] < b[field]) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        else {
            return [];
        }
    };
    OrderPipe = __decorate([
        core_1.Pipe({ name: 'order' }), 
        __metadata('design:paramtypes', [])
    ], OrderPipe);
    return OrderPipe;
}());
exports.OrderPipe = OrderPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9vcmRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQ7SUFDSTtJQUFnQixDQUFDO0lBQ2pCLDZCQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsS0FBYSxFQUFFLE9BQWdCO1FBQ3pELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDVCxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1YsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNYLENBQUM7b0JBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVixDQUFDLENBQUMsQ0FBQTtZQUNILENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNYLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1YsQ0FBQztvQkFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNWLENBQUMsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztRQUNGLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNKLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDWCxDQUFDO0lBQ0MsQ0FBQztJQS9CTDtRQUFDLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7aUJBQUE7SUFnQ3hCLGdCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxpQkFBUyxZQStCckIsQ0FBQSIsImZpbGUiOiJhcHAvcGlwZXMvb3JkZXIucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZVRyYW5zZm9ybSwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ29yZGVyJyB9KVxuZXhwb3J0IGNsYXNzIE9yZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnlbXSwgZmllbGQ6IHN0cmluZywgcmV2ZXJzZTogYm9vbGVhbik6IGFueVtdIHtcblx0XHRpZih2YWx1ZSl7XG5cdFx0XHRpZighcmV2ZXJzZSl7XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGFbZmllbGRdID4gYltmaWVsZF0pIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYVtmaWVsZF0gPCBiW2ZpZWxkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdGlmIChhW2ZpZWxkXSA+IGJbZmllbGRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhW2ZpZWxkXSA8IGJbZmllbGRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuICAgIH1cbn0iXX0=
