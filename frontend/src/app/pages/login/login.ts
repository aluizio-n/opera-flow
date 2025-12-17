import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  email = '';
  password = '';

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Chamar API aqui
  }
}
