import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
    selector: "ns-menu",
    moduleId: module.id,
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.css"],
})

export class MenuComponent implements OnInit {
    constructor(page: Page) { 
        page.actionBarHidden = true;
    }

    ngOnInit() { }
}