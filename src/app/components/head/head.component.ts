import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
    loginModalOpen = false;
    signupModalOpen = false;
    showOption = false;
    postModal = false;
    constructor() { }

    ngOnInit() {
    }
}
