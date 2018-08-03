import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
import { User,  Administrator } from '../models/user';
import 'rxjs/add/operator/switchMap';
import { MatSnackBar } from '@angular/material';

// Sehace un registro con distintos tipos de usuarios

@Injectable()
export class AuthService {
  admin: Observable<Administrator>;
  public loginFormErrorsCode: any;
  private employeeRef: AngularFirestoreDocument<User>;
  public signupFormErrorsCode: any;
  public authState: any = null;
  constructor(private _snackBar: MatSnackBar,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
                this.afAuth.authState.subscribe((auth) => {
                   this.authState = auth
              });
  }
  // Creates superAdministrator account
  public createUserWithEmailAndPassword(administrator: Administrator) {
    return this.afAuth.auth.createUserWithEmailAndPassword(administrator.email,administrator.password)
               .then(admin => {
                 this.setAdministratorToDatabase(admin,administrator.name);
                 this.router.navigate(['/settings']);
               }).catch((error) => {
                this.signupFormErrorsCode = error.code;
                switch(this.signupFormErrorsCode){
                    case 'auth/email-already-in-use':
                           this.showSnackBarForNotifications('Este correo electrónico ya ha sido registrado.');
                           break;
                    case 'auth/invalid-email':
                           this.showSnackBarForNotifications('Este correo electrónico no es válido, intenta con otro.');
                           break;
                    case 'auth/weak-password':
                           this.showSnackBarForNotlifications('La contraseña no es muy fuerte ¡Intenta con otra contraseña!');
                           break;
                    default:
                           return;
                }
              });
  }
  // Adds Super Admin to DB
  public setAdministratorToDatabase(admin, adminName) {
    const userRef: AngularFirestoreDocument<Administrator> = this.afs.doc(`administrators/${admin.uid}`);
    const data: Administrator = {
      uid: admin.uid,
      name: adminName,
      email: admin.email || null
    }
    return userRef.set(data);
  }

  // Function that creates user, only from the admin forms and permission
  public createEmployeeWithEmailAndPassword(employee: User){
    return this.afAuth.auth.createUserWithEmailAndPassword(employee.email,employee.password)
               .then(user => {
                    this.setEmployeeToDatabase(user,employee)
                        .then(() => {
                          this.router.navigate(['/users']);
                          this.showSnackBarForNotifications('Supervisor Creado')
                        })
                        .catch((err) => {
                          this.showSnackBarForNotifications("Hubo un error");
                        });
               }).catch((error) => {
                this.signupFormErrorsCode = error.code;
                switch(this.signupFormErrorsCode){
                    case 'auth/email-already-in-use':
                           this.showSnackBarForNotifications('Este correo electrónico ya ha sido registrado.');
                           break;
                    case 'auth/invalid-email':
                           this.showSnackBarForNotifications('Este correo electrónico no es válido, intenta con otro.');
                           break;
                    case 'auth/weak-password':
                           this.showSnackBarForNotifications('La contraseña no es muy fuerte ¡Intenta con otra contraseña!');
                           break;
                    default:
                           return;
                }
              });
  }

  // Creates any employee uploader or loader to the database, depdnding of user type
  public setEmployeeToDatabase(user,employee: User | User ) {
      const data: User  = {
        uid: user.uid,
        email: employee.email,
        name:  employee.name,
        isDataLoader: employee.isDataLoader === true ? true : false,
        isDataUploader: employee.isDataUploader === true ? true : false,
        agency: employee.agency
      }
      this.employeeRef = this.afs.doc(`users/${user.uid}`)
    return this.employeeRef.set(data);
  }

  // Will try to login any user
  public loginWithEmailAndPassword(_userloginModel: User) {
    this.afAuth.auth.signInWithEmailAndPassword(_userloginModel.email,_userloginModel.password)
        .then( user => {
              console.log(user.uid);
              this.router.navigate(['/']);
        }).catch(
          (error) =>{
              this.loginFormErrorsCode =  error.code;
              switch(this.loginFormErrorsCode){
                  case 'auth/wrong-password':
                       this.showSnackBarForNotifications('Contraseña Incorrecta, vuelve a intentarlo.');
                       break;
                  case 'auth/user-not-found':
                       this.showSnackBarForNotifications('El usuario con este email no ha sido encontrado.');
                       break;
                  default:
                      return;
              }
          }
      );
  }

  public getAdministratorDocument(uid): Observable<Administrator>{
    return  this.afs.doc(`administrators/${uid}`).valueChanges();
  }
  public getsDataLoaderDocument(uid): Observable<User> { 
    return
  }
  public getDataUploaderDocument(uid): Observable<User> {
    return;
  }

  public showSnackBarForNotifications(message: string){ 
    this._snackBar.open(message, "OK", {
        duration: 6000,
    });
  }

  public logoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
  get authUid(): string { 
		return this.authState.uid
	}

}