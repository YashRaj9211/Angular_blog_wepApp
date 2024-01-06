import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-blog-read-page',
  templateUrl: './blog-read-page.component.html',
  styleUrl: './blog-read-page.component.css'
})
export class BlogReadPageComponent implements OnInit {
  blog: any;
  comment: string = '';
  likes: string = '';
  blogContent: any;
  commentDisplay: boolean = false;
  commentContent: any;

  constructor(private _activateRouter: ActivatedRoute, private _apiService: ApiService, private _authService: AuthService, private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    const router = this._activateRouter.snapshot.paramMap.get('id')
    if(router){
    this._apiService.getPostById(router).subscribe(
      {
        next: (response) => {
          this.blog = response;
          console.log(response);
          this.blogContent = this.sanitizer.bypassSecurityTrustHtml(this.blog.blog_content.content);
          this.likes = this.blog.total_likes;
        },
        error: (error) => {
          console.error(error);
          // Handle error
        },
      }
    )
    }
  }



  postComment(){
    const commentData = {
      "user_id": this._authService.getUserId(),
      "blog_id": this.blog._id,
      "comment_content": this.comment
    }

    console.log(commentData);
    this._apiService.postComment(commentData).subscribe({
      next: (response) =>{
        console.log(response);
        this.getComments();
      },error: (err)=>{
        console.log(err);
      }
    })
    
  }

  like(){
    const userId = {userId : this._authService.getUserId()}
    console.log(userId)
    this._apiService.likePost( this.blog._id,userId).subscribe(
      {next: (response) => {
        console.log(response.body.totalLikes);
        this.likes = response.body.totalLikes;
      },
      error: (error) => {
        console.error(error);
      }
    }
    );
  }

  getComments(){
    this._apiService.getCommentByPost(this.blog._id).subscribe({
      next: (comment) => {
        this.commentDisplay = true;
        console.log(comment);
        this.commentContent = comment;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
