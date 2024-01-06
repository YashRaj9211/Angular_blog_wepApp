import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { UserRegistration } from '../../interface/user-registration';
import { Observable, throwError, catchError } from 'rxjs';
import { UserLogin } from '../../interface/user-login';
import { HttpResponse } from '@angular/common/http';
import { BlogPost } from '../../interface/blog-post';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'http://localhost:3000/api';

  private handleError(error: any) {
    // Log the error or format it, then rethrow it
    console.error('API error:', error);
    return throwError(error);
  }

  constructor(private http: HttpClient) {}

  registerUser(registerUserData: UserRegistration): Observable<any> {
    return this.http
      .post(`${this.baseURL}/user/register`, registerUserData)
      .pipe(catchError(this.handleError));
  }

  loginUser(loginUserData: UserLogin): Observable<HttpResponse<any>> {
    return this.http
      .post<any>(`${this.baseURL}/user/login`, loginUserData, {
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  postBlog(blogPost: any): Observable<HttpResponse<any>>{
    return this.http.post<any>(`${this.baseURL}/blog/post-blog`, blogPost, {
      observe: 'response',
    }).pipe(catchError(this.handleError));
  }

  getAllBlogPosts(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/blog/latest`)
      .pipe(catchError(this.handleError));
  }

  getPostById(id: string): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/blog/blogGet/${id}`)
      .pipe(catchError(this.handleError)); 
  }

  likePost(postId: string, userId: object): Observable<HttpResponse<any>>{
    return this.http.post<any>(`${this.baseURL}/blog/like/${postId}`, userId, {
      observe: 'response',
    }).pipe(catchError(this.handleError));
  }

  postComment(commentData: any): Observable<HttpResponse<any>>{
    return this.http.post<any>(`${this.baseURL}/comments/`, commentData, {
      observe: 'response',
    }).pipe(catchError(this.handleError));
  }

  getCommentByPost(postId: string): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/comments/postId/${postId}`).pipe(catchError(this.handleError));
  }
}

export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: any) {
    // Log the error
    console.error('An error occurred:', error);

    // Display a user-friendly error message
    // Optionally, you can inject a service to display error notifications
  }
}
