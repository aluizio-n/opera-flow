import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailValidators } from '../../core/validators/email.validator';

@Component({
  selector: 'app-registro-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private formBuilder = inject(FormBuilder);

  formNovoUser = this.formBuilder.group({
    username: ['', [Validators.required, EmailValidators.palavraProibida('Abacate')]  ],
    nome: ['', Validators.required],
    password: ['', Validators.required]
  })


  cadastrar() {

    const formValues = this.formNovoUser.getRawValue();

    const { username, nome, password } = formValues;

  }


}
