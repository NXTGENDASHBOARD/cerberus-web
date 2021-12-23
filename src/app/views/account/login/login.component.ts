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
  myForm: FormGroup;
  loading: boolean;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      staffNumber: ['', [Validators.required]],
      pin: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.loading = !this.loading;
    this.error = '';
    if (this.myForm.invalid) {
      return;
    }

    setTimeout(() => {
      this.accountService
        .login(this.f.staffNumber.value, this.f.pin.value)
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