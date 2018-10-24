import { Component, OnInit } from '@angular/core';

import { Month } from "./month";
import { MonthService } from "./month.service";

@Component({
    selector: 'ns-months',
    moduleId: module.id,
    templateUrl: "./months.component.html",
})

export class MonthsComponent implements OnInit {
    months: Month[];

    constructor(private monthsService: MonthService) { }

    ngOnInit(): void {
        this.months = this.monthsService.getItems();
    }
}