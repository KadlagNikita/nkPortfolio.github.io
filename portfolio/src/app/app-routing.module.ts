import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';
import{CertificateComponent} from './certificate/certificate.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: '', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'resume',
    component:ResumeComponent
  },
  {
    path:'certificate',
    component:CertificateComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,SkillsComponent,ResumeComponent,ContactComponent]
