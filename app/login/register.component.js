"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.input = {
            "email": "",
            "password": "",
            "passwordConfirm": ""
        };
    }
    RegisterComponent.prototype.register = function () {
        // console.log('email: '+this.input.email);
        // console.log('password: '+this.input.password);
        // console.log('passwordC: '+this.input.passwordConfirm);
        if (this.input.email && this.input.password == this.input.passwordConfirm) {
            this.router.navigate(["/menu"]);
            alert('entry created for: ' + this.input.email);
        }
    }; //login
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'ns-register',
            moduleId: module.id,
            templateUrl: 'register.component.html',
            styleUrls: ["./switch.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQVUvRDtJQUdJLDJCQUEyQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLGlCQUFpQixFQUFFLEVBQUU7U0FFeEIsQ0FBQTtJQUNMLENBQUM7SUFFTSxvQ0FBUSxHQUFmO1FBQ0ksMkNBQTJDO1FBQzNDLGlEQUFpRDtRQUNqRCx5REFBeUQ7UUFFekQsRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMscUJBQXFCLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQyxFQUFBLE9BQU87SUFFUixvQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQXZCTCxpQkFBaUI7UUFSN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBRXhDLENBQUM7eUNBS3FDLHlCQUFnQjtPQUgxQyxpQkFBaUIsQ0F3QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1yZWdpc3RlcicsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcIi4vc3dpdGNoLmNvbXBvbmVudC5jc3NcIl0sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGlucHV0OiBhbnk7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgXG4gICAgICAgIHRoaXMuaW5wdXQgPSB7XG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBhc3N3b3JkQ29uZmlybVwiOiBcIlwiXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlcigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VtYWlsOiAnK3RoaXMuaW5wdXQuZW1haWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncGFzc3dvcmQ6ICcrdGhpcy5pbnB1dC5wYXNzd29yZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXNzd29yZEM6ICcrdGhpcy5pbnB1dC5wYXNzd29yZENvbmZpcm0pO1xuXG4gICAgICAgIGlmKCB0aGlzLmlucHV0LmVtYWlsJiZ0aGlzLmlucHV0LnBhc3N3b3JkPT10aGlzLmlucHV0LnBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21lbnVcIl0pO1xuICAgICAgICAgICAgYWxlcnQoJ2VudHJ5IGNyZWF0ZWQgZm9yOiAnK3RoaXMuaW5wdXQuZW1haWwpO1xuICAgICAgICB9XG4gICAgfS8vbG9naW5cblxuICAgIG5nT25Jbml0KCkgeyB9XG59Il19