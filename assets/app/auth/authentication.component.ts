

import {Component} from 'angular2/core';
import {SignupComponent} from "./signup.component";
@Component({
    selector: 'my-auth',
    directives: [SignupComponent],
    template: `
        <h1>Auth</h1>
        <my-signup></my-signup>


`,


})
export class AuthenticationComponent{

}