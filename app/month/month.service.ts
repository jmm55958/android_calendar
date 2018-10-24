import { Injectable } from "@angular/core";

import { Month } from "./month";

@Injectable()
export class MonthService {
    private months = new Array<Month>(
        
        { id: 0, name: "January"},
        { id: 1, name: "February"},
        { id: 2, name: "March"},
        { id: 3, name: "April"},
        { id: 4, name: "May"},
        { id: 5, name: "June"},
        { id: 6, name: "July"},
        { id: 7, name: "August"},
        { id: 8, name: "September"},
        { id: 9, name: "October"},
        { id: 10, name: "November"},
        { id: 11, name: "December"},

    );

    getItems(): Month[] {
        return this.months;
    }

    getItem(id: number): Month {
        return this.months.filter(month => month.id === id)[0];
    }

}
