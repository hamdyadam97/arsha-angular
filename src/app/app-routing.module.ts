import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminserviceComponent } from './adminservice/adminservice.component';
import {ViewComponent} from './view/view.component';
import {AboutComponent} from './about/about.component';
import {GalaryComponent} from './galary/galary.component'
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:"service",component:AdminserviceComponent},
  {path:"view",component:ViewComponent},
  {path:"about",component:AboutComponent},
  {path:"galary",component:GalaryComponent},
  {path:"contact",component:ContactComponent},
  {path:"home",component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
