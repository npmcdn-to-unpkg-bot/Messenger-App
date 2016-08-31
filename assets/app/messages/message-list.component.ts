
import {Component, OnInit} from 'angular2/core';
import {MessageComponent} from "./message.component";
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
    selector: 'my-message-list',
    directives: [MessageComponent],
    providers: [],
    template: `
                <section class="col-md-8 col-md-offset-2">
                    <my-message
                        *ngFor = "#message of messages"
                        [message]="message" 
                        >
                    </my-message>
                </section>
        `,

})

export class MessageListComponent implements OnInit{
    messages: Message[] = [];

    constructor(private _messageService: MessageService) {}
    // messages = this._messageService.getMessages();

    ngOnInit(){
        this.messages = this._messageService.getMessages();
    }
}