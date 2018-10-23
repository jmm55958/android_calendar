import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";



@Injectable()
export class ItemService {

    constructor(
        private route: ActivatedRoute, 
    ){}

    private jan = new Array<Item>(
        { id: 1, month:0, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:0, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private feb = new Array<Item>(
        { id: 1, month:1, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:1, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private mar = new Array<Item>(
        { id: 1, month:2, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:2, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private apr = new Array<Item>(
        { id: 1, month:3,name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:3,name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private may = new Array<Item>(
        { id: 1, month:4, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:4, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private jun = new Array<Item>(
        { id: 1, month:5, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:5, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private jul = new Array<Item>(
        { id: 1, month:6, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:6, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private aug = new Array<Item>(
        { id: 1, month:7, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:7, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    
    private sept = new Array<Item>(
        { id: 1,  month:8, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3,  month:8, name: "Labor Day", type: "Holiday", date: "09/03" },
        { id: 4,  month:8, name: "National Wildlife Day", type: "Event", date: "09/04" },
        { id: 5,  month:8, name: "Taste of Athens", type: "Event", date: "09/04" },
        { id: 6,  month:8, name: "Spiderman", type: "Movie", date: "09/06" },
        { id: 7,  month:8, name: "Georgia at South Carolina", type: "Game", date: "09/08" },
        { id: 8,  month:8, name: "Deadpool", type: "Movie", date: "09/13" },
        { id: 9,  month:8, name: "UGA Night at the Braves", type: "Event", date: "09/14" },
        { id: 10, month:8, name: "Georgia vs Middle Tennessee State", type: "Game", date: "09/15" },
        { id: 11, month:8, name: "Dawgs After Dark", type: "Event", date: "09/14" },
        { id: 12, month:8, name: "Georgia at Missouri", type: "Game", date: "09/22" },
        { id: 13, month:8, name: "Movie Trivia Night", type: "Event", date: "09/25" },
        { id: 14, month:8, name: "Pizza & Politics", type: "Event", date: "09/26" },
        { id: 17, month:8, name: "Drive in Movie: Lilo and Stitch", type: "Movie", date: "09/27" },
        { id: 18, month:8, name: "Street Paint Competition", type: "Event", date: "09/28" },
        { id: 19, month:8, name: "Georgia vs Tennessee", type: "Game", date: "09/29" },
    );
    private oct = new Array<Item>(
        { id: 1, month:9, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:9, name: "Labor Day", type: "Holiday", date: "09/03" },
        { id: 2, month:9, name:"Test event", type:"test", date:"10/03"},
    );
    private nov = new Array<Item>(
        { id: 1, month:10, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:10, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private dec = new Array<Item>(
        { id: 1, month:11, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3, month:11, name: "Labor Day", type: "Holiday", date: "09/03" },
    );

    private months = [
        this.jan,
        this.feb,
        this.mar,
        this.apr,
        this.may,
        this.jun,
        this.jul,
        this.aug,
        this.sept,
        this.oct,
        this.nov,
        this.dec
    ];

    getItems(id: number): Item[] {
        return this.months[id];
    }

    getItem(month: number, id: number): Item {
        
        // const month = +this.route.snapshot.params["month"];
        return this.months[month].filter(item => item.id === id)[0];
    }
}
