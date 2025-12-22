import { inject, Injectable, signal } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private users: User[] = [
    { email: 'aluizio@gmail.com', password: '123456' }
  ]

  private router = inject(Router);

  currentUser = signal<User | null>(this.intilizedUser());
  authenticated = signal<boolean>(!!this.currentUser());

  intilizedUser(): User | null {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }

  register(user: User): boolean {
    if (this.users.find((userCadastrado) => userCadastrado.email === user.email)) {
      return false;
    }

    this.users.push(user);
    this.router.navigate(['/'])
    return true;

  }


  login(email: string, password: string): boolean {
    const user = this.users.find((user) => user.email === email && user.password === password);

    if (user) {
      this.currentUser.set(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticated.set(true);
      this.router.navigate(['home'])
      return true;
    }

    return false;

  }

  logout(): void {
    this.currentUser.set(null);
    this.authenticated.set(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
