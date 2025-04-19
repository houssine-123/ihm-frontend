import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AjouteroffreComponent } from './ajouteroffre/ajouteroffre.component';
import { ListoffreComponent } from './listoffre/listoffre.component';
import { ProfilrecComponent } from './profilrec/profilrec.component';
import { PostuleroffreComponent } from './postuleroffre/postuleroffre.component';
import { LoginAdminComponent } from 'src/admin/login/loginAdmin.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    SignupComponent,
    AjouteroffreComponent,
    ListoffreComponent,
    ProfilrecComponent,
    PostuleroffreComponent,
    LoginAdminComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
