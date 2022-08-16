import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private blogService:BlogService, private router:Router) {}

  // @ts-ignore
  form:FormGroup;



  ngOnInit(): void {

    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      title: new FormControl('',[Validators.required]),
      author: new FormControl('',[Validators.required]),
      content: new FormControl('',[Validators.required]),
      upvote: new FormControl(0),
      downvote: new FormControl(0)
    });
  }

  addBlog() {
  this.blogService.addBlog(this.form.value).subscribe(
    res=> {
      console.log(res)
      this.router.navigate(['']);
    },
    err=>console.log(err)
  );
  }


  goTolist() {
    this.router.navigate(['']);
  }
}
