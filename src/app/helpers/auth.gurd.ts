import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountsService } from '../services/account.service';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
        private accountsService: AccountsService,
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot
    ): boolean {
        if (this.accountsService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/account/login']); // Redirect to login page if not logged in
            return false;
        }
    }

    // canActivate(): boolean {
    //   return this.authService.getUser().pipe(
    //     map(user => {
    //       if (user) {
    //         return true;
    //       } else {
    //         this.router.navigate(['/login']);
    //         return false;
    //       }
    //     })
    //   );
    // }
}
