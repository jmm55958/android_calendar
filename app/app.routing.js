"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var months_component_1 = require("./month/months.component");
var menu_component_1 = require("./menu/menu.component");
var switch_component_1 = require("./login/switch.component");
var register_component_1 = require("./login/register.component");
var routes = [
    // root
    { path: "", redirectTo: "/switch", pathMatch: "full" },
    // login stuff
    { path: "switch", component: switch_component_1.SwitchComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    // menu
    { path: "menu", component: menu_component_1.MenuComponent },
    //months
    { path: "months", component: months_component_1.MonthsComponent },
    //items
    { path: "months/:month", component: items_component_1.ItemsComponent },
    { path: "item/:month/:id", component: item_detail_component_1.ItemDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSw2REFBMEQ7QUFDMUQsd0RBQXFEO0FBRXJELDZEQUEyRDtBQUMzRCxpRUFBK0Q7QUFDL0QsSUFBTSxNQUFNLEdBQVc7SUFFbkIsT0FBTztJQUNQLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFFdEQsY0FBYztJQUNkLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBRWxELE9BQU87SUFDUCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFFMUMsUUFBUTtJQUNSLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUU5QyxPQUFPO0lBQ1AsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtDQUU5RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTW9udGhzQ29tcG9uZW50fSBmcm9tIFwiLi9tb250aC9tb250aHMuY29tcG9uZW50XCI7IFxuaW1wb3J0IHsgTWVudUNvbXBvbmVudH0gZnJvbSBcIi4vbWVudS9tZW51LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBTd2l0Y2hDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9zd2l0Y2guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgXG4gICAgLy8gcm9vdFxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvc3dpdGNoXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICBcbiAgICAvLyBsb2dpbiBzdHVmZlxuICAgIHsgcGF0aDogXCJzd2l0Y2hcIiwgY29tcG9uZW50OiBTd2l0Y2hDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxuICAgIFxuICAgIC8vIG1lbnVcbiAgICB7IHBhdGg6IFwibWVudVwiLCBjb21wb25lbnQ6IE1lbnVDb21wb25lbnQgfSxcblxuICAgIC8vbW9udGhzXG4gICAgeyBwYXRoOiBcIm1vbnRoc1wiLCBjb21wb25lbnQ6IE1vbnRoc0NvbXBvbmVudCB9LFxuXG4gICAgLy9pdGVtc1xuICAgIHsgcGF0aDogXCJtb250aHMvOm1vbnRoXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86bW9udGgvOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuICAgIFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=