import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from '../auth/authentication.service';
import { MaterialElementsModule  } from './material-elements.module';
import { FloatingButtonComponent } from './floating-button/floating-button.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialElementsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavigationComponent,
    FloatingButtonComponent,
    NotFoundComponent
  ],
  exports: [
    NavigationComponent,
    FloatingButtonComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedComponentsModule { }
