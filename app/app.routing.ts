import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { MonthsComponent} from "./month/months.component"; 
import { MenuComponent} from "./menu/menu.component";

import { SwitchComponent } from "./login/switch.component";
import { RegisterComponent } from "./login/register.component";
const routes: Routes = [
    
    // root
    { path: "", redirectTo: "/switch", pathMatch: "full" },
    
    // login stuff
    { path: "switch", component: SwitchComponent },
    { path: "register", component: RegisterComponent },
    
    // menu
    { path: "menu", component: MenuComponent },

    //months
    { path: "months", component: MonthsComponent },

    //items
    { path: "months/:month", component: ItemsComponent },
    { path: "item/:month/:id", component: ItemDetailComponent },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }