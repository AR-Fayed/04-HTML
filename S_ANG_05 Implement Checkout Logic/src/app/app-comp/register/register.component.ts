import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import Validation from './confirm-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  error:string='';

  constructor(private authService: AuthService, private router: Router) {}

  registerForm = new FormGroup(
    {
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      password_confirm: new FormControl('', [Validators.required]),
    },
    [Validation.match('password', 'password_confirm')]
  );

  register() {
    if (this.registerForm.valid) {
      this.error='';
      this.authService.register(this.registerForm.value).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.log(error.error)
          this.error=error?.error
        }
      );
    }
  }
}
