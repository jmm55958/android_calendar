import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {MonthsComponent} from "./month/months.component"; 

const routes: Routes = [
    // root
    { path: "", redirectTo: "/months", pathMatch: "full" },
    
    //months
    { path: "months", component: MonthsComponent },

    //items
    { path: "months/:id", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }