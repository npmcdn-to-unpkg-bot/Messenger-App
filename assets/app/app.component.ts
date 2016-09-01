import {Component} from 'angular2/core';
import {HeaderComponent} from "./header.component";
import {BodyComponent} from "./messages/body.component";

@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <my-body></my-body>
        </div>

    `,
    directives: [HeaderComponent, BodyComponent]
})

export class AppComponent {

}