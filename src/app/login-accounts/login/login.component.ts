import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  // imports: [FirebaseAppModule,FormModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  valCheck: string[] = ['remember'];

  password!: string;

  constructor(
    private authService: AuthService
  ) { }

  loginWithGoogle() {
    this.authService.googleLogin().then((result) => {
      console.log('User logged in:', result);
    }).catch((error) => {
      console.error('Login error:', error);
    });
  }

  logout() {
    console.log('logout ==>')
    this.authService.logout().then((result) => {
      console.log("User logged out", result);
    }).catch((error)=> {
      console.log('error =>', error);
    })
  }
}
