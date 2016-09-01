import {Component} from 'angular2/core';
import {MessageListComponent} from "./message-list.component";
import {MessageInputComponent} from "./message-input.component";

@Component({
    selector:'my-body',
    directives: [MessageListComponent, MessageInputComponent],
    template: `
        <div class="container">
            <div class="row">
                <my-message-input></my-message-input>
            </div>
            <br>
            <div class="row">
                <my-message-list></my-message-list>
            </div>
        </div>
`,

})

export class BodyComponent{

}