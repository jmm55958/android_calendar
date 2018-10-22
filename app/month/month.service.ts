import { Injectable } from "@angular/core";

import { Month } from "./month";

@Injectable()
export class MonthService {
    private months = new Array<Month>(
        
        { id: 0, name: "August"},
        { id: 1, name: "September"},
        { id: 2, name: "October"},
        { id: 3, name: "November"},
        { id: 4, name: "December"},
        { id: 5, name:"Does this show up?"}

    );

    getItems(): Month[] {
        return this.months;
    }

    getItem(id: number): Month {
        return this.months.filter(month => month.id === id)[0];
    }

}
