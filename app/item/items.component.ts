import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService,private route: ActivatedRoute, ) {}

    ngOnInit(): void {
     
        const month = +this.route.snapshot.params["month"];
        this.items = this.itemService.getItems(month);
       
        console.log("The month id is: "+month);
        // console.log(this.items);

    }
}