import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutesModule } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { AdministratorModule } from './administrator/administrator.module';
import { LoaderModule } from './loader/loader.module';
import { UploaderModule } from './uploader/uploader.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), 
    BrowserAnimationsModule, CalendarModule.forRoot(),  
    CommonModule,
    RouterModule,            
    RoutesModule,    
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthModule,
    AdministratorModule,
    LoaderModule,
    UploaderModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
