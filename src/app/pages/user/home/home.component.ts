import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    postModal = false;
    posts = [
        {
            name: 'User Name',
            time: '2d',
            tag: 'gossip',
            dp: '#',
            post_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam architecto assumenda cum doloribus dolorum eius facere facilis
            in iste itaque libero molestias, nulla, similique voluptas voluptate.`,
            likes: '100',
            comments: '29'
        },
        {
            name: 'User Name',
            time: '2d',
            tag: 'gossip',
            dp: '#',
            post_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam architecto assumenda cum doloribus dolorum eius facere facilis
            in iste itaque libero molestias, nulla, similique voluptas voluptate.`,
            likes: '100',
            comments: '29'
        },
        {
            name: 'User Name',
            time: '2d',
            tag: 'gossip',
            dp: '#',
            post_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam architecto assumenda cum doloribus dolorum eius facere facilis
            in iste itaque libero molestias, nulla, similique voluptas voluptate.`,
            likes: '100',
            comments: '29'
        },
        {
            name: 'User Name',
            time: '2d',
            tag: 'gossip',
            dp: '#',
            post_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam architecto assumenda cum doloribus dolorum eius facere facilis
            in iste itaque libero molestias, nulla, similique voluptas voluptate.`,
            likes: '100',
            comments: '29'
        },
        {
            name: 'User Name',
            time: '2d',
            tag: 'gossip',
            dp: '#',
            post_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam architecto assumenda cum doloribus dolorum eius facere facilis
            in iste itaque libero molestias, nulla, similique voluptas voluptate.`,
            likes: '100',
            comments: '29'
        },
        {
            name: 'User Name',
            time: '2d',
            tag: 'gossip',
            dp: '#',
            post_text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam architecto assumenda cum doloribus dolorum eius facere facilis
            in iste itaque libero molestias, nulla, similique voluptas voluptate.`,
            likes: '100',
            comments: '29'
        },
    ];
    postModalData;

    constructor() { }

    ngOnInit() {
    }

    showPostModal(ev) {
        this.postModal = true;
        this.postModalData = ev;
    }

}
