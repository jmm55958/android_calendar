"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SwitchComponent = /** @class */ (function () {
    function SwitchComponent(router) {
        this.router = router;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    SwitchComponent.prototype.login = function () {
        console.log('email: ' + this.input.email);
        console.log('password: ' + this.input.password);
        if (this.input.email && this.input.password) {
            this.router.navigate(["/menu"]);
        }
    }; //login
    SwitchComponent.prototype.ngOnInit = function () { };
    SwitchComponent = __decorate([
        core_1.Component({
            selector: 'ns-switch',
            moduleId: module.id,
            templateUrl: "./switch.component.html",
            styleUrls: ["./switch.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SwitchComponent);
    return SwitchComponent;
}());
exports.SwitchComponent = SwitchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBUy9EO0lBSUkseUJBQTJCLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUE7SUFDTCxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDLEVBQUEsT0FBTztJQUVSLGtDQUFRLEdBQVIsY0FBYSxDQUFDO0lBcEJMLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7eUNBTXFDLHlCQUFnQjtPQUoxQyxlQUFlLENBcUIzQjtJQUFELHNCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1zd2l0Y2gnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zd2l0Y2guY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc3dpdGNoLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuXG5leHBvcnQgY2xhc3MgU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpbnB1dDogYW55O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IFxuICAgICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbWFpbDogJyt0aGlzLmlucHV0LmVtYWlsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Bhc3N3b3JkOiAnK3RoaXMuaW5wdXQucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmKHRoaXMuaW5wdXQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21lbnVcIl0pO1xuICAgICAgICB9XG4gICAgfS8vbG9naW5cblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il19