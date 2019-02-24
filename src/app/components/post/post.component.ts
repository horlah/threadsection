import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    @Input('post') post;
    @Output() onClickPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showPostModal(post) {
      this.onClickPost.emit(post);
  }

}
