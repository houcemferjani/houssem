import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesGuard } from './acces.guard';
import { AdminauthComponent } from './adminauth/adminauth.component';
import { CreatmaterielComponent } from './creatmateriel/creatmateriel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatefichepComponent } from './ficheprojet/createfichep/createfichep.component';
import { DetailficheComponent } from './ficheprojet/detailfiche/detailfiche.component';
import { ListefichepComponent } from './ficheprojet/listefichep/listefichep.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ReadmaterielComponent } from './readmateriel/readmateriel.component';

const routes: Routes = [
  {path:'auth', component:AdminauthComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AccesGuard]},
  {path:'forbidden', component:ForbiddenComponent},
  {path:'createmateriel', component:CreatmaterielComponent},
  {path:'createmateriel/:id', component:CreatmaterielComponent},
  {path:'readmateriel', component:ReadmaterielComponent},
  {path:'readprojet', component:ListefichepComponent},
  {path:'readprojet/:num', component:DetailficheComponent},
  {path:'createprojet', component:CreatefichepComponent},
  {path:'', redirectTo:'auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
