import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authentication.service';
import { User, Administrator } from '../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input('user') user: User;
  @Input('admin') admin: Administrator;
  constructor(private _authService: AuthService,
              private _router: Router) { }
  ngOnInit() { }
  public logout(){
    this._authService.logoutUser();
  }
  public navigate(route: string ){
    this._router.navigate([`/${route}`]);
  }
}
