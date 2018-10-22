import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {MonthsComponent} from "./month/months.component"; 

const routes: Routes = [
    { path: "", redirectTo: "/months", pathMatch: "full" },
    
    
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },


    { path: "months", component: MonthsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }