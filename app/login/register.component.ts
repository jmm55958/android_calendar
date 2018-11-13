import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'ns-register',
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ["./switch.component.css"],

})

export class RegisterComponent implements OnInit {
    public input: any;

    public constructor(private router: RouterExtensions) { 
        this.input = {
            "email": "",
            "password": "",
            "passwordConfirm": ""

        }
    }

    public register() {
        // console.log('email: '+this.input.email);
        // console.log('password: '+this.input.password);
        // console.log('passwordC: '+this.input.passwordConfirm);

        if( this.input.email&&this.input.password==this.input.passwordConfirm) {
            this.router.navigate(["/menu"]);
            alert('entry created for: '+this.input.email);
        }
    }//login

    ngOnInit() { }
}