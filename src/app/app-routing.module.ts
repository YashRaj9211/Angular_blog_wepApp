import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleWriteComponent } from './components/article-write/article-write.component';
import { AuthGuard } from './auth.guard';
import { HelPlsComponent } from './components/hel-pls/hel-pls.component';
import { BlogReadPageComponent } from './components/blog-read-page/blog-read-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'write', component: ArticleWriteComponent, canActivate: [AuthGuard]},
  {path: 'help', component: HelPlsComponent, canActivate: [AuthGuard]},
  {path: 'blog/:id', component: BlogReadPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
