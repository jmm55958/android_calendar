"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_service_1 = require("./movie.service");
var MovieComponent = /** @class */ (function () {
    function MovieComponent(movieService) {
        this.movieService = movieService;
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.movies = this.movieService.getItems();
    };
    MovieComponent = __decorate([
        core_1.Component({
            selector: 'ns-movie',
            moduleId: module.id,
            templateUrl: 'movie.component.html'
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService])
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW92aWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELGlEQUErQztBQVEvQztJQUdJLHdCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFbkQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBUFEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FLb0MsNEJBQVk7T0FIckMsY0FBYyxDQVExQjtJQUFELHFCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gXCIuL21vdmllXCI7XG5pbXBvcnQgeyBNb3ZpZVNlcnZpY2UgfSBmcm9tIFwiLi9tb3ZpZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtbW92aWUnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdtb3ZpZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNb3ZpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbW92aWVzOiBNb3ZpZVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb3ZpZVNlcnZpY2U6IE1vdmllU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb3ZpZXMgPSB0aGlzLm1vdmllU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cbn0iXX0=