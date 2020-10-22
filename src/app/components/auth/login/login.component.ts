import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user && user.user.emailVerified) {
        this.error = false;
        this.router.navigate(['/home']);
      } else if (user) {
        this.error = false;
        this.router.navigate(['/verificaemail']);
      } else {
        this.error = true;
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  ngOnInit(): void {
  }

}
