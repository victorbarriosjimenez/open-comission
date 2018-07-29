import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { AuthGuard } from '../auth/authentication.guard';
import { ReportsComponent } from './reports/reports/reports.component';
const adminRoutes: Routes = [  
  { path: 'admin',
    children:[
        {  path: 'users', component: UsersComponent },
        {  path: 'sales', component: SalesComponent },
        {  path: 'agencies', component: SalesComponent },
        {  path: 'reports', component: ReportsComponent }
        // {  path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
        // {  path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
        // {  path: 'agencies', component: SalesComponent, canActivate: [AuthGuard] },
        // {  path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] }
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