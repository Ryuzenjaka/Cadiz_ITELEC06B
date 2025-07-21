import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
import { PostListComponent } from './post/post-list/post.list.component';
import { PostCreateComponent } from './post/post-create/post.create.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';

import { AuthGuard } from './authentication/auth.guard';  // Import AuthGuard

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },       // Protected route
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },  // Protected route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
=======
const routes: Routes = [];
>>>>>>> b712274d0e1bcf6e8250d3949d2f2f47a0d28428

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule {}
=======
export class AppRoutingModule { }
>>>>>>> b712274d0e1bcf6e8250d3949d2f2f47a0d28428
