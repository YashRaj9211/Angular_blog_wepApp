import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-write',
  templateUrl: './article-write.component.html',
  styleUrl: './article-write.component.css'
})


export class ArticleWriteComponent {
  constructor(private _apiService: ApiService, private _authService: AuthService, private _router: Router){}

  blogTitle: string ='';
  blogContent: string ='';
  userId: string = this._authService.getUserId();
  
  printContent(){
    console.log(this.blogContent);
  }
  submitPost(){

    const postContent={
      "author_id": this.userId,
      "blog_content": {
        "title": this.blogTitle,
        "content":this.blogContent
      },
      "tags": ["tech", "angular", "express", "mongodb"]
    };
    console.log(postContent);

    this._apiService.postBlog(postContent).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status === 201) {
          this._router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error(error);
        // Handle error
      },
    });
  }
} 
