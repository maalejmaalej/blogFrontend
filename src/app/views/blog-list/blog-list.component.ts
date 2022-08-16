import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs=[];
  search: string = "";

  constructor(private blogService: BlogService, private router:Router) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs(this.search).subscribe((res:any) => {
      this.blogs = res;
      console.log(res);
    })
  }

  goToBlogDetail(id: string){
    this.router.navigate(['blog-details'], { queryParams: { id: id } });
  }

  goToAddBlog() {
    this.router.navigate(['add-blog']);
  }

  upvote(blog:any) {
    blog.upvote ++;
    this.blogService.updateBlog(blog.id, blog).subscribe();
  }

  downvote(blog:any) {
    blog.downvote ++;
    this.blogService.updateBlog(blog.id, blog).subscribe();
  }


}
