import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  storedPosts: Post[] = [];

  onAddPost(post: Post) {
    this.storedPosts.push(post);
  }
}