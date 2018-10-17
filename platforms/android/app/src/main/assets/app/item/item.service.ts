import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, name: "Labor Day", type: "Holiday", date: "09/03" },
        { id: 4, name: "National Wildlife Day", type: "Event", date: "09/04" },
        { id: 5, name: "Taste of Athens", type: "Event", date: "09/04" },
        { id: 6, name: "Spiderman", type: "Movie", date: "09/06" },
        { id: 7, name: "Georgia at South Carolina", type: "Game", date: "09/08" },
        { id: 8, name: "Deadpool", type: "Movie", date: "09/13" },
        { id: 9, name: "UGA Night at the Braves", type: "Event", date: "09/14" },
        { id: 10, name: "Georgia vs Middle Tennessee State", type: "Game", date: "09/15" },
        { id: 11, name: "Dawgs After Dark", type: "Event", date: "09/14" },
        { id: 12, name: "Georgia at Missouri", type: "Game", date: "09/22" },
        { id: 13, name: "Movie Trivia Night", type: "Event", date: "09/25" },
        { id: 14, name: "Pizza & Politics", type: "Event", date: "09/26" },
        { id: 17, name: "Drive in Movie: Lilo and Stitch", type: "Movie", date: "09/27" },
        { id: 18, name: "Street Paint Competition", type: "Event", date: "09/28" },
        { id: 19, name: "Georgia vs Tennessee", type: "Game", date: "09/29" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
