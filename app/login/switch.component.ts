import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'ns-switch',
    moduleId: module.id,
    templateUrl: "./switch.component.html",
    styleUrls: ["./switch.component.css"],
})

export class SwitchComponent implements OnInit {

    public input: any;

    public constructor(private router: RouterExtensions) { 
        this.input = {
            "email": "",
            "password": ""
        }
    }

    public login() {
        console.log('email: '+this.input.email);
        console.log('password: '+this.input.password);

        if(this.input.email && this.input.password) {
            this.router.navigate(["/menu"]);
        }
    }//login

    ngOnInit() { }
}