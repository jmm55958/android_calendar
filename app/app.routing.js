"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var months_component_1 = require("./month/months.component");
var menu_component_1 = require("./menu/menu.component");
var movie_component_1 = require("./movie/movie.component");
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
    { path: "months", component: months_component_1.MonthsComponent },
    { path: "movies", component: movie_component_1.MovieComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSw2REFBMEQ7QUFDMUQsd0RBQXFEO0FBQ3JELDJEQUF5RDtBQUV6RCw2REFBMkQ7QUFDM0QsaUVBQStEO0FBQy9ELElBQU0sTUFBTSxHQUFXO0lBRW5CLE9BQU87SUFDUCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBRXRELGNBQWM7SUFDZCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUVsRCxPQUFPO0lBQ1AsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBRTFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFFN0MsT0FBTztJQUNQLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7Q0FFOUQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vbnRoc0NvbXBvbmVudH0gZnJvbSBcIi4vbW9udGgvbW9udGhzLmNvbXBvbmVudFwiOyBcbmltcG9ydCB7IE1lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1vdmllQ29tcG9uZW50IH0gZnJvbSBcIi4vbW92aWUvbW92aWUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFN3aXRjaENvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL3N3aXRjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICBcbiAgICAvLyByb290XG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9zd2l0Y2hcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIFxuICAgIC8vIGxvZ2luIHN0dWZmXG4gICAgeyBwYXRoOiBcInN3aXRjaFwiLCBjb21wb25lbnQ6IFN3aXRjaENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJyZWdpc3RlclwiLCBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50IH0sXG4gICAgXG4gICAgLy8gbWVudVxuICAgIHsgcGF0aDogXCJtZW51XCIsIGNvbXBvbmVudDogTWVudUNvbXBvbmVudCB9LFxuXG4gICAgeyBwYXRoOiBcIm1vbnRoc1wiLCBjb21wb25lbnQ6IE1vbnRoc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJtb3ZpZXNcIiwgY29tcG9uZW50OiBNb3ZpZUNvbXBvbmVudCB9LFxuXG4gICAgLy9pdGVtc1xuICAgIHsgcGF0aDogXCJtb250aHMvOm1vbnRoXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86bW9udGgvOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuICAgIFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=