import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { NotesComponent } from './notes/notes.component';
// import { CommentsComponent } from './services/comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    ProductDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    UsersComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    ReactiveLoginComponent,
    ReactiveRegisterComponent,
    NotesComponent,
    // CommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
