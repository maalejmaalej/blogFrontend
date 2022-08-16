import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogListComponent} from "./views/blog-list/blog-list.component";
import {BlogDetailsComponent} from "./views/blog-details/blog-details.component";
import {AddBlogComponent} from "./views/add-blog/add-blog.component";

const routes: Routes = [
  {path:'',component:BlogListComponent},
  {path:'blog-details',component:BlogDetailsComponent},
  {path:'add-blog',component:AddBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
