import {IAuthData} from '../../shared/interfaces';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api';

@Injectable()

export class AuthService {
  public logged = false;
  public user: IAuthData = {email: '', password: ''};
  constructor(
    private api: ApiService,
    // private router: Router,
  ) {}
  // Authenticate function
  public authenticate(data: IAuthData) {
    console.log('data', data);
    if (data.email && data.password) {
      this.api.post('/signin', {email: data.email, password: data.password}).subscribe(
        (user) => {
          if (user && user.data && user.data.authToken) {
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            this.user.email = user.data.email;
          }
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }
  // Checking for login User
  public userloggedin() {
    if (localStorage.getItem('currentUser')) {
      this.logged = true;
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }
  // log out func, delete user from storage
  public logOutFunk() {
    localStorage.removeItem('currentUser');
  }
}
