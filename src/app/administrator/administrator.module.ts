import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrators/administrator.component';
import { AdministratorSalesComponent } from './administrator-sales/administrator-sales.component';
import { AdministratorFormComponent } from './administrator-form/administrator-form.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { UsersComponent } from './users/users.component';
import { AdministratorRoutesModule } from './administrator.routes';
import { SalesComponent } from './sales/sales.component';
import { ReportsModule } from './reports/reports.module';
@NgModule({
  imports: [
    CommonModule,
    ReportsModule,
    AdministratorRoutesModule
  ],
  declarations:  [
    AdministratorComponent,
    AdministratorSalesComponent,
    AdministratorFormComponent,
    AgenciesComponent,
    SalesComponent,
    UsersComponent
  ],
  providers: [
    
  ]
})
export class AdministratorModule { }
