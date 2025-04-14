import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AjouteroffreComponent } from './ajouteroffre/ajouteroffre.component';
import { ListoffreComponent } from './listoffre/listoffre.component';
import { ProfilrecComponent } from './profilrec/profilrec.component'; // Import AuthGuard if needed

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ajouteroffre', component: AjouteroffreComponent },
  {path: 'listoffre', component: ListoffreComponent},
  {path: 'profilrec', component: ProfilrecComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
