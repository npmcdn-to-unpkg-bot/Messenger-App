
import {Component} from "angular2/src/core/metadata";
@Component({
    selector: 'my-logout',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <button
                (click)="onLogout()"
                class="btn btn-danger"
                >
                Logout
            </button>
        </section>

`,

})

export class LogoutComponent{
    onLogout(){

    }
}