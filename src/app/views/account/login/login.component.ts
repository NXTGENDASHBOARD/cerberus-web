import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Account, Login } from 'src/app/_models';
import { AccountService } from 'src/app/_services';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  staffNumber = new FormControl('', [Validators.required]);
  pin  = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();


  myForm: FormGroup;
  loading: boolean;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
   
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      staffNumber: this.staffNumber,
      pin: this.pin,
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

    const model : Login = {
      staffNumber:this.f.staffNumber.value,
      pin: this.f.pin.value
    };

    setTimeout(() => {
      this.accountService
        .login(model)
        .subscribe((data: any) => {
          this.loading = !this.loading;
          const account = data as Account;    
          if (account != null) {        
            this.router.navigate(['analytics']);
          } else {
            this.error = data;            
          }
        });
    }, 500);
  }
}
