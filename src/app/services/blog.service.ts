import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) {

  }

  getBlogs(search: string = "") {
    return this.http.get(this.baseUrl + "blog/?search="+search);
  }

  getBlog(id:string) {
    return this.http.get(this.baseUrl + "blog/"+ id);
  }

  addBlog(blog:any) {
    return this.http.post(this.baseUrl + "blog",blog);
  }
  updateBlog(id:string, blog:any) {
    return this.http.put(this.baseUrl + "blog/" + id, blog);
  }
}
