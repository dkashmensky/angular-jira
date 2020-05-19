import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
   }

  ngOnInit(): void {
  }

  loginRequest(value) {
    const thing = this.authService.login(value)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(token => {
        if (!token) {
          throw new Error(`Token undefined: ${JSON.stringify(token)}`);
        }
        this.authService.saveToken(token);
      })
      .then(() => this.router.navigate(['/app/board']))
      .catch(error => {
        console.error(error);
      });
  }

}
