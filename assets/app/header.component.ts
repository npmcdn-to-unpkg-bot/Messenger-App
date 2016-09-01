
import {Component} from "angular2/src/core/metadata";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Authentication</a></li>
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
`],

})

export class HeaderComponent{

}