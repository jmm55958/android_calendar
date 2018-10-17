import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Page } from "tns-core-modules/ui/page";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private page: Page
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);

        this.page.css = "#labelStyle{ background-color: #564448; color: white} button {font-size: 36; color: blue;}" +
                        " .message {font-size: 36; color: #284848; text-align: center; margin: 0 20;}";
    }
}
