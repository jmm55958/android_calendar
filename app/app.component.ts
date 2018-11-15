import { Component } from "@angular/core";
// var Sqlite = require("nativescript-sqlite");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    // private database : any;
    // private people : Array<any>;

    // public constructor(){
    //     this.people = [];
    //     (new Sqlite("my.db")).then( db=> {
    //         db.execSQL("CREATE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT , name TEXT, email TEXT)").then(id=>{
    //             this.database = db;
    //             this.fetch();
    //         }, error => {
    //             console.log("create db error ", error);
    //         });
    //     }, error => {
    //         console.log("OPEN DB error: ", error);
    //     });
        
    // }

    // public insert(){
    //     this.database.execSQL("INSERT INTO people (name, email) VALUES (?,?) ", ['Joshua', 'joshua@test.com']).then(id=>{
    //         this.fetch();
    //     }, error => {
    //         console.log("insert DB error: ", error);
    //     });
    // }
    // public fetch(){
    //     this.database.all("SELECT * FROM people").then(rows=>{
    //         this.people = [];
    //         for(let row in rows){
    //             this.people.push({
    //                 "id": rows [row][0],
    //                 "name": rows [row][1],
    //                 "email": rows [row][2],

    //             })
    //         }
    //     }, error => {
    //         console.log("fetch DB error: ", error);
    //     });
    // }


 }
