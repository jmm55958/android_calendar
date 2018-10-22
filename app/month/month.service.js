"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MonthService = /** @class */ (function () {
    function MonthService() {
        this.months = new Array({ id: 0, name: "August" }, { id: 1, name: "September" }, { id: 2, name: "October" }, { id: 3, name: "November" }, { id: 4, name: "December" }, { id: 5, name: "Does this show up?" });
    }
    MonthService.prototype.getItems = function () {
        return this.months;
    };
    MonthService.prototype.getItem = function (id) {
        return this.months.filter(function (month) { return month.id === id; })[0];
    };
    MonthService = __decorate([
        core_1.Injectable()
    ], MonthService);
    return MonthService;
}());
exports.MonthService = MonthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbnRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVZLFdBQU0sR0FBRyxJQUFJLEtBQUssQ0FFdEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFDeEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsRUFDM0IsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFDekIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFDMUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFDMUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxvQkFBb0IsRUFBQyxDQUV0QyxDQUFDO0lBVU4sQ0FBQztJQVJHLCtCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBbEJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtPQUNBLFlBQVksQ0FvQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBNb250aCB9IGZyb20gXCIuL21vbnRoXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb250aFNlcnZpY2Uge1xuICAgIHByaXZhdGUgbW9udGhzID0gbmV3IEFycmF5PE1vbnRoPihcbiAgICAgICAgXG4gICAgICAgIHsgaWQ6IDAsIG5hbWU6IFwiQXVndXN0XCJ9LFxuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIlNlcHRlbWJlclwifSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJPY3RvYmVyXCJ9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcIk5vdmVtYmVyXCJ9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkRlY2VtYmVyXCJ9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOlwiRG9lcyB0aGlzIHNob3cgdXA/XCJ9XG5cbiAgICApO1xuXG4gICAgZ2V0SXRlbXMoKTogTW9udGhbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRocztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBNb250aCB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRocy5maWx0ZXIobW9udGggPT4gbW9udGguaWQgPT09IGlkKVswXTtcbiAgICB9XG5cbn1cbiJdfQ==