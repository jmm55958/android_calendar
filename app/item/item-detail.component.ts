import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


import { Item } from "./item";
import { ItemService } from "./item.service";



@Component({
    selector: "ns-details",
    moduleId: module.id,   
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item-detail.component.css"],
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute, 
    ) { }

    ngOnInit(): void {
        const month = +this.route.snapshot.params["month"];
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(month, id);

        console.log("The month id is: "+month);
        console.log("The item id is: "+id);
        console.log(this.item);
    }
}
