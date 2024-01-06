import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.css',
})
export class BlogPostCardComponent {
  @Input() blogContent: any;

  constructor(private _router: Router){}

  // trackByFn(index: any, item: { _id: any; }) {
  //   return item._id; // Assuming each item has a unique '_id' property
  // }

  printResponse(){
    console.log(this.blogContent);
  }

  openBlogPost(blogId: string) {
    console.log(blogId);
    this._router.navigate(['/blog', blogId]);
  }
  info(blogId: any, authorId: any) {
    console.log('Blog ID:', blogId);
    console.log('Author ID:', authorId);
    // Additional logic for handling the click event
  }
}
