import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(AuthService);

  inputEmail = signal<string>('');
  inputPassword =  signal<string>('');

  inputEmailInvalido = computed(() => {
    const val = this.inputEmail();
    return val !== "" && val.length <= 6;
  })

  inputPasswordInvalido = computed(() => {
    const val = this.inputPassword();
    return val !== '' && val.length < 3;
  })

  formValido = computed(() => {
    const emailOk = this.inputEmail().length > 6
    const passwordOk = this.inputPassword().length >= 3

    return  emailOk && passwordOk;
  })

  login() {
    const email = this.inputEmail();
    const password = this.inputPassword();

    this.authService.login(email, password);

    alert(`Email: ${email}, passowrd: ${password}`);

  }

}
