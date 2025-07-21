<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Post } from './post/post.model';
import { AuthService } from './authentication/auth.service';  // adjust path as necessary
=======
import { Component } from '@angular/core';
>>>>>>> b712274d0e1bcf6e8250d3949d2f2f47a0d28428

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  storedPosts: Post[] = [];  // 👈 Make sure the variable is named exactly this

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.authservice.autoAuthUser();  // Call automatic authentication on app load
  }
}
=======
export class AppComponent {
  title = 'angular-app';
}
>>>>>>> b712274d0e1bcf6e8250d3949d2f2f47a0d28428
