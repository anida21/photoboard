import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreateComponent } from './posts/create/create.component';

const routes: Routes = [
  {
    path: '', component: PostListComponent
  },
  {
    path: 'create', component: CreateComponent
  },

  {
    path: 'edit/:postId', component: CreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
