import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from './services/api/api.service';

import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleWriteComponent } from './components/article-write/article-write.component';
import { HelPlsComponent } from './components/hel-pls/hel-pls.component';
import { NavabrComponent } from './components/navabr/navabr.component';
import { BlogPostCardComponent } from './components/childComponents/blog-post-card/blog-post-card.component';
import { BlogReadPageComponent } from './components/blog-read-page/blog-read-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    UserLoginComponent,
    HomeComponent,
    ArticleWriteComponent,
    HelPlsComponent,
    NavabrComponent,
    BlogPostCardComponent,
    BlogReadPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
