import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private blogService:BlogService, private router:Router) { }
  blog:any;
  id='';
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    })

    this.getBlog();
  }

  getBlog() {
    this.blogService.getBlog(this.id).subscribe((data: any) => {
      this.blog = data;
      console.log(this.blog)
    })
  }

  upvote() {
    this.blog.upvote ++;
    this.blogService.updateBlog(this.id, this.blog).subscribe();
  }

  downvote() {
    this.blog.downvote ++;
    this.blogService.updateBlog(this.id, this.blog).subscribe();
  }
  goTolist() {
    this.router.navigate(['']);
  }
}
