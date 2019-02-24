import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    @Input('loginState') loginState: boolean;
    rootElement = <HTMLElement>document.getElementsByTagName('html')[0];

    constructor() { }

    ngOnInit() {
        console.log(this.rootElement);
    }

}
