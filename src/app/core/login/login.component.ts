import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword: boolean = false;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async onSubmit(){
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const user = this.loginForm.get('usuario')?.value;
    const password = this.loginForm.get('password')?.value;

    const usuario = await this.authService.login(user, password);
    if (!usuario) {
      alert('Credenciales incorrectas. Por favor, intente de nuevo.');
      return;
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    if (usuario['rol'] === 'Administrador') {
    this.router.navigate(['/inc-general']);
    } else {
      alert('Acceso denegado. Solo los administradores pueden iniciar sesión.');
      this.router.navigate(['/login']);
    }
  }
}