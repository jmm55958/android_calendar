"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var month_service_1 = require("./month.service");
var MonthsComponent = /** @class */ (function () {
    function MonthsComponent(monthsService) {
        this.monthsService = monthsService;
    }
    MonthsComponent.prototype.ngOnInit = function () {
        this.months = this.monthsService.getItems();
    };
    MonthsComponent = __decorate([
        core_1.Component({
            selector: 'ns-months',
            moduleId: module.id,
            templateUrl: "./months.component.html",
        }),
        __metadata("design:paramtypes", [month_service_1.MonthService])
    ], MonthsComponent);
    return MonthsComponent;
}());
exports.MonthsComponent = MonthsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGhzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbnRocy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsaURBQStDO0FBUS9DO0lBR0kseUJBQW9CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUksQ0FBQztJQUVwRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFQUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQUtxQyw0QkFBWTtPQUh0QyxlQUFlLENBUTNCO0lBQUQsc0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vbnRoIH0gZnJvbSBcIi4vbW9udGhcIjtcbmltcG9ydCB7IE1vbnRoU2VydmljZSB9IGZyb20gXCIuL21vbnRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1tb250aHMnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb250aHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBNb250aHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG1vbnRoczogTW9udGhbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9udGhzU2VydmljZTogTW9udGhTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vbnRocyA9IHRoaXMubW9udGhzU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cbn0iXX0=