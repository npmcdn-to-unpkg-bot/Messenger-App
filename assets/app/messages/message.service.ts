import {Message} from "./message";
import {Http, Headers} from "angular2/http";
import {Injectable} from "angular2/core";
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService{
    messages: Message[] = [];

    constructor(private _http: Http){}

    addMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this._http.post('/message', body, {headers: headers})
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    getMessages(){
        return this.messages;
    }

editMessage(message: Message){
    this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
}

deleteMessage(message: Message){
    this.messages.splice(this.messages.indexOf(message),1);
}
}