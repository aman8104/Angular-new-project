import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, firstValueFrom } from 'rxjs';
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient
  ){}

  async googleLogin(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    // await this.sendTokenToBackend(credential.user as firebase.User); // Ensure type is correctly cast
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  private async sendTokenToBackend(user: firebase.User | null) {
    if (user) {
      const idToken = await user.getIdToken();
      // await firstValueFrom(this.http.post(`${environment.backendUrl}/api/auth/login`, { idToken }));
    }
  }


  getUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }
}
