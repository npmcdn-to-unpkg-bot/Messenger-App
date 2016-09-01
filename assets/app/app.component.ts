import {Component} from 'angular2/core';
import {HeaderComponent} from "./header.component";
import {BodyComponent} from "./messages/body.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AuthenticationComponent} from "./auth/authentication.component";

@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>

    `,
    directives: [HeaderComponent, ROUTER_DIRECTIVES]
})


@RouteConfig([
    {   path: '/',
        name: 'ShowMessages',
        component: BodyComponent,
        useAsDefault: true,
    },
    {   path: '/auth',
        name: 'Auth',
        component: AuthenticationComponent,
    },
])
export class AppComponent {

}