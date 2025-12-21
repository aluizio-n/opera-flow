import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class EmailValidators {

    static palavraProibida(palavraProibido: string): ValidatorFn {

        return (controle: AbstractControl): ValidationErrors | null => {
            // Abacate
            const valorDoInput = controle.value as string;

            if (valorDoInput == palavraProibido) {
                return { 'palavraInvalida': true };
            }

            return null;
        }

    }

}
