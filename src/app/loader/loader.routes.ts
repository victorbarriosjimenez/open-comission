import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { LoaderComponent } from './loader.component';
import { AuthGuard } from '../auth/authentication.guard';
import { ComissionPanelComponent } from './comission-panel/comission-panel.component';
const adminRoutes: Routes = [  
  { path: 'user-loader', component: LoaderComponent, canActivate: [AuthGuard], 
    children:[
        {  path: 'comission-panel', component: ComissionPanelComponent, canActivate: [AuthGuard] }
        
    ]   
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministratorRoutesModule { }