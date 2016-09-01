
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-header',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li><a [routerLink]="['ShowMessages']">Show Messages</a></li>
                    <li><a [routerLink]="['Auth']">Authentication</a></li>
                </ul>
            </nav>
        </header>
`,
    styles: [`
        header{
            margin-bottom: 20px;
        }
        ul{
            text-align: center;
        }
        li{
            float: none;
            display: inline-block;
        }
        .router-link-active{
            background-color: lightgrey;
            color: black;
        }
`],

})

export class HeaderComponent{

}