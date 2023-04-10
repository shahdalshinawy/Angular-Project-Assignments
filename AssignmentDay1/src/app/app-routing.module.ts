import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'product',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  // {path:'posts/:id/comments',component:CommentsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reactiveLogin',component:ReactiveLoginComponent},
  {path:'reactiveRegister',component:ReactiveRegisterComponent},
  {path:'notes',component:NotesComponent},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
