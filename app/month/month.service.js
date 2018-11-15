"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MonthService = /** @class */ (function () {
    function MonthService() {
        this.months = new Array(
        // { id: 0, name: "January"},
        // { id: 1, name: "February"},
        // { id: 2, name: "March"},
        // { id: 3, name: "April"},
        // { id: 4, name: "May"},
        // { id: 5, name: "June"},
        // { id: 6, name: "July"},
        { id: 7, name: "August" }, { id: 8, name: "September" }, { id: 9, name: "October" }, { id: 10, name: "November" }, { id: 11, name: "December" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbnRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVZLFdBQU0sR0FBRyxJQUFJLEtBQUs7UUFFdEIsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQ3hCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQzNCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQ3pCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQzNCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLENBRTlCLENBQUM7SUFVTixDQUFDO0lBUkcsK0JBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUF4QlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO09BQ0EsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE1vbnRoIH0gZnJvbSBcIi4vbW9udGhcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vbnRoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBtb250aHMgPSBuZXcgQXJyYXk8TW9udGg+KFxuICAgICAgICBcbiAgICAgICAgLy8geyBpZDogMCwgbmFtZTogXCJKYW51YXJ5XCJ9LFxuICAgICAgICAvLyB7IGlkOiAxLCBuYW1lOiBcIkZlYnJ1YXJ5XCJ9LFxuICAgICAgICAvLyB7IGlkOiAyLCBuYW1lOiBcIk1hcmNoXCJ9LFxuICAgICAgICAvLyB7IGlkOiAzLCBuYW1lOiBcIkFwcmlsXCJ9LFxuICAgICAgICAvLyB7IGlkOiA0LCBuYW1lOiBcIk1heVwifSxcbiAgICAgICAgLy8geyBpZDogNSwgbmFtZTogXCJKdW5lXCJ9LFxuICAgICAgICAvLyB7IGlkOiA2LCBuYW1lOiBcIkp1bHlcIn0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiQXVndXN0XCJ9LFxuICAgICAgICB7IGlkOiA4LCBuYW1lOiBcIlNlcHRlbWJlclwifSxcbiAgICAgICAgeyBpZDogOSwgbmFtZTogXCJPY3RvYmVyXCJ9LFxuICAgICAgICB7IGlkOiAxMCwgbmFtZTogXCJOb3ZlbWJlclwifSxcbiAgICAgICAgeyBpZDogMTEsIG5hbWU6IFwiRGVjZW1iZXJcIn0sXG5cbiAgICApO1xuXG4gICAgZ2V0SXRlbXMoKTogTW9udGhbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRocztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBNb250aCB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRocy5maWx0ZXIobW9udGggPT4gbW9udGguaWQgPT09IGlkKVswXTtcbiAgICB9XG5cbn1cbiJdfQ==