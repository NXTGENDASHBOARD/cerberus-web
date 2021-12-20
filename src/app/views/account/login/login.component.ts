import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.loading = !this.loading;
    this.error = '';
    if (this.form.invalid) {
      return;
    }

    setTimeout(() => {
      this.accountService
        .login(this.f.email.value, this.f.password.value)
        .subscribe((data: any) => {
          this.loading = !this.loading;
          if (data != null && data.token) {
            this.router.navigate(['home']);
          } else {
            this.error = data;
          }
        });
    }, 3000);
  }
}
