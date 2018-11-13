import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";



@Injectable()
export class ItemService {

    constructor(
        private route: ActivatedRoute, 
    ){}

    private jan = new Array<Item>(
        // { id: 1, month:0, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        // { id: 3, month:0, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private feb = new Array<Item>(
        // { id: 1, month:1, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        // { id: 3, month:1, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private mar = new Array<Item>(
        // { id: 1, month:2, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        // { id: 3, month:2, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private apr = new Array<Item>(
        // { id: 1, month:3,name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        // { id: 3, month:3,name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private may = new Array<Item>(
        // { id: 1, month:4, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        // { id: 3, month:4, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private jun = new Array<Item>(
        // { id: 1, month:5, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        // { id: 3, month:5, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private jul = new Array<Item>(
        // { id: 1, month:6, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        // { id: 3, month:6, name: "Labor Day", type: "Holiday", date: "09/03" },
    );
    private aug = new Array<Item>(
        { id: 1, month:7, name: "Game Night", type: "Event", date: "08/05" },
        { id: 2, month:7, name: "Glow Golf", type: "Event", date: "08/09" },
        { id: 3, month:7, name: "Taste of Athens", type: "Event", date: "08/07" },
        { id: 4, month:7, name: "Field Dat", type: "Event", date: "08/08" },
        // { id: 5, month:7, name: "Avengers - Infinity War", type: "Movie", date: "08/09" },
        { id: 6, month:7, name: "Chris Jones - Hypnotist", type: "Event", date: "08/10" },
        { id: 7, month:7, name: "Silent Disco", type: "Event", date: "08/11" },
        { id: 8, month:7, name: "Freshmen Welcome", type: "Event", date: "08/12" },
        { id: 9, month:7, name: "Union Calendar Release", type: "Event", date: "08/14" },
        { id: 10, month:7, name: "LGBT Resource Center Open House", type: "Event", date: "08/15" },
        { id: 11, month:7, name: "Trivia Night", type: "Event", date: "08/16" },
        // { id: 12, month:7, name: "Bee Movie", type: "Movie", date: "08/17" },
        { id: 13, month:7, name: "Lambda Alliance Cookout", type: "Event", date: "08/20" },
        { id: 14, month:7, name: "Rec Sports Play Day", type: "Event", date: "08/21" },
        { id: 15, month:7, name: "Unionwide Meeting", type: "Event", date: "08/21" },
        { id: 16, month:7, name: "Involvement Fair", type: "Event", date: "08/23" },
        { id: 17, month:7, name: "Dawgs after Dark", type: "Event", date: "08/24" },
        { id: 18, month:7, name: "Comedy Show", type: "Event", date: "08/30" },
      );
    
    private sept = new Array<Item>(
        { id: 1,  month:8, name: "Georgia vs Austin Peay", type: "Game", date: "09/01" },
        { id: 3,  month:8, name: "Labor Day", type: "Holiday", date: "09/03" },
        { id: 4,  month:8, name: "National Wildlife Day", type: "Event", date: "09/04" },
        { id: 5,  month:8, name: "Taste of Athens", type: "Event", date: "09/04" },
        // { id: 6,  month:8, name: "Spiderman", type: "Movie", date: "09/06" },
        { id: 7,  month:8, name: "Georgia at South Carolina", type: "Game", date: "09/08" },
        // { id: 8,  month:8, name: "Deadpool", type: "Movie", date: "09/13" },
        { id: 9,  month:8, name: "UGA Night at the Braves", type: "Event", date: "09/14" },
        { id: 10, month:8, name: "Georgia vs Middle Tennessee State", type: "Game", date: "09/15" },
        { id: 11, month:8, name: "Dawgs After Dark", type: "Event", date: "09/14" },
        { id: 12, month:8, name: "Georgia at Missouri", type: "Game", date: "09/22" },
        { id: 13, month:8, name: "Movie Trivia Night", type: "Event", date: "09/25" },
        { id: 14, month:8, name: "Pizza & Politics", type: "Event", date: "09/26" },
        // { id: 17, month:8, name: "Drive in Movie: Lilo and Stitch", type: "Movie", date: "09/27" },
        { id: 18, month:8, name: "Street Paint Competition", type: "Event", date: "09/28" },
        { id: 19, month:8, name: "Georgia vs Tennessee", type: "Game", date: "09/29" },
    );
    private oct = new Array<Item>(
        { id: 1, month:10, name: "Bulldog Bash", type: "Event", date: "10/01"},
        { id: 2, month:10, name: "Lip Sync Competition", type: "Event", date: "10/02"},
        { id: 3, month:10, name: "Silent Disco", type:"Event", date:"10/02"},
        { id: 4, month:10, name: "Stop & Serve", type: "Event", date: "10/03"},
        { id: 5, month:10, name: "National Taco Day", type: "Event", date: "10/04"},
        { id: 6, month:10, name: "Comedy Show", type:"Event", date:"10/05"},
        { id: 7, month:10, name: "Parade", type: "Event", date: "10/05"},
        { id: 8, month:10, name: "Homecoming Carnival", type: "Event", date: "10/05"},
        { id: 9, month:10, name: "Georgia vs Vanderbelt", type:"Game", date:"10/06"},
        { id: 10, month:10, name: "Drag Queen Bingo", type: "Event", date: "10/09"},
        { id: 11, month:10, name: "Dance the Night Away", type: "Event", date: "10/11"},
        { id: 12, month:10, name:"Dawgs Making it Better", type:"Event", date:"10/12"},
        { id: 13, month:10, name: "Georgia vs LSU", type: "Game", date: "10/13"},
        { id: 14, month:10, name: "The Rocky Horror Picture Show", type: "Preformance", date: "10/18"},
        { id: 15, month:10, name: "The Rocky Horror Picture Show", type: "Preformance", date: "10/19"},
        { id: 16, month:10, name: "The Rocky Horror Picture Show", type: "Preformance", date: "10/20"},
        { id: 17, month:10, name: "The Rocky Horror Picture Show", type: "Preformance", date: "10/21"},
        { id: 15, month:10, name: "Karaoke Night", type:"Event", date:"10/23"},
        { id: 16, month:10, name: "Fall Break", type:"Holiday", date:"10/26"},
        { id: 17, month:10, name: "Georgia vs Florida", type: "Game", date: "10/027"},
        { id: 18, month:10, name: "Murder Mystery", type: "Event", date: "10/30"},
    );
    private nov = new Array<Item>(
        { id: 1, month:11, name: "Wild N Out", type: "Event", date: "11/01" },
        { id: 2, month:11, name: "Casino Night", type: "Event", date: "11/02" },
        { id: 3, month:11, name: "Georgia vs Kentucky", type: "Game", date: "11/03" },
        { id: 4, month:11, name: "National Donut Day", type: "Event", date: "11/05" },
        { id: 5, month:11, name: "Ramsey Palooza", type: "Event", date: "11/08" },
        { id: 6, month:11, name: "Georgia vs Auburn", type: "Game", date: "11/10" },
        { id: 7, month:11, name: "Oxfam Hunger Banquet", type: "Event", date: "11/13" },
        { id: 8, month:11, name: "Georgia vs Massachusetts", type: "Game", date: "11/17" },
        { id: 9, month:11, name: "Thanksgiving Break", type: "Holiday", date: "11/19 - 11/23" },
        { id: 10, month:11, name: "Georgia vs Georgia Tech", type: "Game", date: "11/24" },
        { id: 11, month:11, name: "National Cotton Candy Day", type: "Event", date: "11/26" },
        { id: 12, month:11, name: "Disney Singalong", type: "Event", date: "11/28" },
        { id: 13, month:11, name: "Late Night Bingo", type: "Event", date: "11/29" }, 
    );
    private dec = new Array<Item>(
        { id: 1, month:12, name: "Last Day of Class", type: "Event", date: "12/04" },
        { id: 2, month:12, name: "Reading Day", type: "Event", date: "12/05" },
        { id: 3, month:12, name: "Finals", type: "Event", date: "12/06" },
        { id: 4, month:12, name: "Finals", type: "Event", date: "12/07" },
        { id: 5, month:12, name: "Finals", type: "Event", date: "12/10" },
        { id: 6, month:12, name: "Finals", type: "Event", date: "12/11" },
        { id: 7, month:12, name: "Finals", type: "Event", date: "12/12" },
        { id: 8, month:12, name: "Commencement", type: "Event", date: "12/14" },
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
